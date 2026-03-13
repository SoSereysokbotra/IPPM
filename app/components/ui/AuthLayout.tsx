import React, { ReactNode } from "react";

interface AuthLayoutProps {
  /** The main content (typically a form) for the left side */
  children: ReactNode;
  /** Optional content for the top-left area (like a "Back" link) */
  leftTopContent?: ReactNode;
  /** Background image details for the right panel */
  rightImage: {
    src: string;
    alt: string;
    /** e.g. "grayscale-[20%]" or "" */
    className?: string;
  };
  /** Content to display overlaying the right panel image */
  rightContent: ReactNode;
  /** Optional background gradients to overlay over the image */
  rightOverlay?: ReactNode;
  /** Defaults to "selection:bg-brand-primary selection:text-white" */
  selectionColor?: string;
}

export default function AuthLayout({
  children,
  leftTopContent,
  rightImage,
  rightContent,
  rightOverlay,
  selectionColor = "selection:bg-brand-primary selection:text-white",
}: AuthLayoutProps) {
  return (
    <div
      className={`min-h-screen w-full bg-dark-bg text-white flex font-sans ${selectionColor}`}
    >
      {/* ========================================
          LEFT SIDE: FORM / MAIN CONTENT
          ======================================== */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-16 md:px-24 xl:px-32 relative z-10 overflow-y-auto">
        {leftTopContent && (
          <div className="absolute top-8 left-6 sm:left-16 md:left-24 xl:left-32">
            {leftTopContent}
          </div>
        )}

        <div className="max-w-md w-full mx-auto py-12 lg:py-0">
          {children}
        </div>
      </div>

      {/* ========================================
          RIGHT SIDE: BRANDING / VISUAL
          ======================================== */}
      <div className="hidden lg:flex w-1/2 relative bg-dark-bg p-4 pl-0">
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-dark-border">
          {/* Background Image */}
          <img
            src={rightImage.src}
            alt={rightImage.alt}
            className={`absolute inset-0 w-full h-full object-cover ${rightImage.className || ""}`}
          />

          {/* Optional Overlay Gradients (often backdrop-blur or gradient logic specific to that page) */}
          {rightOverlay}

          {/* Main Overlay Content */}
          <div className="absolute bottom-0 inset-x-0 p-12 xl:p-16 flex flex-col z-20">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}
