import cv2
import numpy as np
from flask import Flask, Response

app = Flask(__name__)

def generate_frames():
    # -------- IP CAMERA URL --------
    url = "http://10.1.64.245:8080/video"
    cap = cv2.VideoCapture(url)
    print("📡 Connecting to mobile camera...")

    while True: 
        ret, frame = cap.read()
        if not ret:
            print("❌ Cannot read frame from camera")
            break

        frame = cv2.resize(frame, (640, 480))
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        # -------- RED OBJECT RANGE --------
        lower_red = np.array([0, 120, 70])
        upper_red = np.array([10, 255, 255])

        mask = cv2.inRange(hsv, lower_red, upper_red)

        kernel = np.ones((5,5), np.uint8)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
        mask = cv2.morphologyEx(mask, cv2.MORPH_DILATE, kernel)

        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        # Camera center
        h, w, _ = frame.shape
        cam_x = w // 2
        cam_y = h // 2

        cv2.circle(frame, (cam_x, cam_y), 6, (255,0,0), -1)
        cv2.putText(frame, "Camera Center", (cam_x-70, cam_y-10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255,0,0), 2)

        object_id = 0
        for c in contours:
            area = cv2.contourArea(c)
            if area > 1000:
                object_id += 1
                x, y, w_box, h_box = cv2.boundingRect(c)
                cx = x + w_box // 2
                cy = y + h_box // 2

                cv2.rectangle(frame, (x, y), (x+w_box, y+h_box), (0,255,0), 2)
                cv2.circle(frame, (cx, cy), 6, (0,0,255), -1)
                cv2.putText(frame, f"ID:{object_id} X:{cx} Y:{cy}",
                            (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0,255,0), 2)

        # Encode frame as JPEG
        ret, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        # Yield in MJPEG format
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    cap.release()

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False, threaded=True)