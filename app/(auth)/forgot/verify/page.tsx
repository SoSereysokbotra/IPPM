"use client";

import Link from "next/link";
import AuthLayout from "../../../components/ui/AuthLayout";

export default function VerifyRecovery() {
  return (
    <AuthLayout
      leftTopContent={
        <Link
          href="/forgot-password"
          aria-label="Back to Forgot Password"
          className="text-muted hover:text-white transition-colors text-sm flex items-center gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      }
      rightImage={{
        src: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773408867/pexels-eden-fc-620771246-36027861_lkyp13.jpg",
        alt: "iPPM Agri-Tech",
      }}
      rightOverlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent"></div>
          <div className="absolute inset-0 bg-secondary/5 backdrop-blur-[1px]"></div>
        </>
      }
      rightContent={
        <>
          <h2 className="text-3xl xl:text-4xl font-medium text-white mb-4 leading-tight">
            Protecting Your <br />
            <span className="text-secondary">Data Integrity.</span>
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed text-sm xl:text-base mb-6">
            Our 85–95% accuracy in anomaly detection extends to our security
            layers, ensuring only verified users can adjust critical equipment.
          </p>

          {/* Security Indicators */}
          <div className="flex gap-4">
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
              AUTH_LEVEL: RECOVERY
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
              ENC: AES-256
            </div>
          </div>
        </>
      }
      selectionColor="selection:bg-secondary selection:text-white"
    >
      <div className="mb-10">
        <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mb-6 text-secondary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Check your inbox<span className="text-secondary">.</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          For security, enter the 6-digit recovery code we just sent to your
          industrial account email address.
        </p>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* OTP Input Group */}
        <div className="flex justify-between gap-2 sm:gap-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-full aspect-square text-center text-xl font-bold bg-dark-surface border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-white"
            />
          ))}
        </div>

        <div className="space-y-4">
          <button className="w-full px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary/90 transition-colors text-white text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            Verify Code
          </button>

          <div className="text-center">
            <button className="text-sm text-muted hover:text-white transition-colors">
              Didn't receive the email?{" "}
              <span className="text-secondary font-medium">Resend</span>
            </button>
          </div>
        </div>
      </form>

      <p className="mt-12 text-center text-[10px] text-muted uppercase tracking-[0.2em]">
        Secure Recovery Protocol v2.6
      </p>
    </AuthLayout>
  );
}
