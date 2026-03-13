import Image from "next/image";
import Header from "@/components/Header";
import MapIllustration from "./MapIllustration";


export default function IPPMHero() {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-start pt-32 px-4 font-sans selection:bg-brand-primary selection:text-white">
      <Header />
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center leading-[1.15] mb-6 max-w-4xl tracking-tight">
        Next-Gen Manufacturing with <br className="hidden sm:block" />
        Intelligent PPM Cloud Platform
        <span className="text-brand-primary">.</span>
      </h1>

      {/* Subheading */}
      <p className="text-muted text-center text-sm sm:text-base max-w-2xl mb-10 leading-relaxed">
        Empowering SMEs with IoT-driven adaptive automation, real-time vision
        intelligence, and 3D Digital Twin monitoring for the modern factory
        floor.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
        <button className="px-6 py-3.5 rounded-xl bg-dark-surface border border-dark-border hover:bg-dark-surface-hover transition-colors text-sm font-medium w-full sm:w-auto">
          Explore the Workflow
        </button>
        <button className="px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover transition-colors text-white text-sm font-medium w-full sm:w-auto">
          Request a Demo
        </button>
      </div>

      {/* ========================================
        MAIN 3D VISUALIZATION / IMAGE SECTION
        ========================================
      */}
      <div className="relative w-full max-w-[800px] aspect-[16/9] mb-20 flex justify-center items-center">
        {/* Added 'relative' here to contain the absolute overlay */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center">
          {/* The Image */}
          <img
            src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773384648/748ac8b6-9a83-46bf-b192-9f8e40027ca2_1_-Photoroom_gjq0rz.png"
            alt="Device Image"
            className="w-full h-full object-contain z-0"
          />

          {/* The Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Bottom Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium text-center tracking-tight mb-24">
        Why Choose <span className="text-secondary">iPPM</span> for Your
        Production?
      </h2>

      {/* ========================================
        FEATURE SECTIONS
        ========================================
      */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-32 pb-24 px-4 sm:px-8">
        {/* Feature 1: Layered IoT Architecture */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl sm:text-4xl font-semibold leading-[1.2] mb-6 tracking-tight">
              Four-Layered <br />
              <span className="text-secondary">IoT Cloud Architecture</span>
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">
              Our modular design spans from physical ESP32-S3 controllers to a
              high-performance FastAPI cloud backend. Seamlessly integrate
              sensors and cameras to turn your shop floor into a data-driven
              ecosystem.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              {/* The Image */}
              <img
                src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773385755/photo_2026-03-13_14-07-29-Photoroom_ex2ml0.png"
                alt="Device Image"
                className="w-full h-full object-contain z-0"
              />

              {/* The Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Feature 2: Vision Intelligence (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl sm:text-4xl font-semibold leading-[1.2] mb-6 tracking-tight">
              Advanced Vision AI <br />
              <span className="text-secondary">with OpenCV & YOLO</span>
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">
              Detect thread jams, fabric misalignment, or component defects in
              real-time. Utilize mobile phone cameras or embedded ESP32-S3 AI
              sensors to achieve over 90% detection accuracy in controlled
              industrial settings.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              {/* The Image */}
              <img
                src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773385755/photo_2026-03-13_14-07-33-Photoroom_taddqz.png"
                alt="Device Image"
                className="w-full h-full object-contain z-0"
              />

              {/* The Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Feature 3: Predictive Maintenance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl sm:text-4xl font-semibold leading-[1.2] mb-6 tracking-tight">
              Predictive Maintenance <br />
              <span className="text-secondary">Eliminate Downtime</span>
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">
              Forecast equipment failures before they happen. By monitoring
              vibration and temperature trends with Scikit-learn models, iPPM
              reduces maintenance costs by 20–35% and extends machinery
              lifespan.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              {/* The Image */}
              <img
                src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773384648/748ac8b6-9a83-46bf-b192-9f8e40027ca2_1_-Photoroom_gjq0rz.png"
                alt="Device Image"
                className="w-full h-full object-contain z-0"
              />

              {/* The Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
        EVERYDAY USE CASES SECTION
        ========================================
      */}
      <div className="w-full pt-12 pb-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center tracking-tight leading-[1.15] mb-16">
          Real-World Applications <br />
          <span className="text-secondary">The Cambodian Context</span>
        </h2>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden group bg-dark-surface border border-dark-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773387153/pexels-chuck-2973392_t3hik9.jpg"
                  alt="Garment Industry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center z-20">
                <h4 className="text-3xl font-bold text-white mb-3">
                  Garment Industry
                </h4>
                <p className="text-muted text-sm max-w-[280px]">
                  Detect thread jams or fabric misalignment in Phnom Penh
                  factories using mobile vision processing.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[350px] rounded-3xl overflow-hidden group bg-dark-surface border border-dark-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773386990/pexels-zakhar-9407601_jpbr7t.jpg"
                  alt="Smart Agri-Tech"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center z-20">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Smart Agri-Tech
                </h4>
                <p className="text-muted text-sm max-w-[280px]">
                  Sorting produce based on quality and size detected by AI
                  cameras for export readiness.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative w-full h-[350px] rounded-3xl overflow-hidden group bg-dark-surface border border-dark-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773386708/pexels-cottonbro-4709369_ys1qfj.jpg"
                  alt="Electronics Assembly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center z-20">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Electronics Assembly
                </h4>
                <p className="text-muted text-sm max-w-[280px]">
                  High-precision placement validation of components on PCBs
                  using OV5640 high-res sensors.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[504px] rounded-3xl overflow-hidden group bg-dark-surface border border-dark-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773387072/pexels-tima-miroshnichenko-5380664_api0pc.jpg"
                  alt="Digital Command Centre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center z-20">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Digital <span className="text-secondary">Command Centre</span>
                </h4>
                <p className="text-muted text-sm max-w-[280px]">
                  A WebSocket-powered dashboard for real-time telemetry and
                  manual override of production lines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
        CONTACT & FOOTER
        ========================================
      */}
        <div className="w-full max-w-5xl mx-auto py-24 px-4 sm:px-8 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center tracking-tight mb-4">
            Industrial <span className="text-secondary">Partnerships</span>
          </h2>
          <p className="text-muted text-center text-sm sm:text-base mb-16">
            Ready to digitize your production line? Contact our deployment team.
          </p>
          <MapIllustration />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-center mb-16">
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-2">Technical Support</h4>
              <a
                href="mailto:dev@ippm-cloud.com"
                className="text-brand-primary hover:opacity-80 transition-opacity"
              >
                dev@ippm-cloud.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-2">Location</h4>
              <p className="text-muted text-sm">Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <footer className="relative w-full mt-12 pt-20 pb-10 px-4 sm:px-8 flex flex-col items-center overflow-hidden border-t border-dark-border/50">
          <h3 className="text-9xl font-medium tracking-wide mb-8 z-10">
            Intelligent PPM
          </h3>
          <p className="text-muted text-xs sm:text-sm z-10">
            © 2026 iPPM Platform. Empowering Cambodia's Industrial Future.
          </p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[150px]  flex items-center justify-center  from-transparent to-dark-border z-0"></div>
        </footer>
      </div>
    </div>
  );
}
