"use client";

import Link from "next/link";
import AuthLayout from "../../components/ui/AuthLayout";

export default function VerifyOTP() {
  return (
    <AuthLayout
      leftTopContent={
        <Link
          href="/signup"
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
          Back to Signup
        </Link>
      }
      rightImage={{
        src: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773408866/pexels-jakubzerdzicki-20552673_g41sor.jpg",
        alt: "iPPM Security",
        className: "grayscale-[20%]",
      }}
      rightOverlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent"></div>
          <div className="absolute inset-0 bg-brand-primary/5 backdrop-blur-[2px]"></div>
        </>
      }
      rightContent={
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
              Identity Layer Active
            </div>
          </div>

          <h2 className="text-3xl xl:text-4xl font-medium text-white mb-4 leading-tight">
            Secure Cloud <br />
            <span className="text-secondary">Authentication.</span>
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed text-sm xl:text-base mb-8">
            Protecting Cambodia's industrial future through Role-Based Access
            Control (RBAC) and encrypted device management.
          </p>

          {/* Micro Metrics for Professional Feel */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-xs text-muted mb-1">Latency</p>
              <p className="text-xl font-mono text-white">≤ 1.0s</p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">Packet Loss</p>
              <p className="text-xl font-mono text-white">≤ 1%</p>
            </div>
          </div>
        </>
      }
    >
      <div className="mb-10">
        <div className="w-12 h-12 bg-brand-primary/10 border border-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00A3FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Verify Account<span className="text-brand-primary">.</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          We've sent a 6-digit verification code to your email. Enter the code
          to activate your industrial node access.
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
              className="w-full aspect-square text-center text-xl font-bold bg-dark-surface border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all text-white"
            />
          ))}
        </div>

        <div className="space-y-4">
          <button className="w-full px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover transition-colors text-white text-sm font-medium shadow-[0_0_20px_rgba(0,163,255,0.2)]">
            Verify & Enter Dashboard
          </button>

          <button className="w-full px-6 py-3.5 rounded-xl bg-transparent border border-dark-border hover:bg-dark-surface transition-colors text-muted text-sm font-medium">
            Resend Code
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-xs text-muted leading-relaxed">
        By verifying, you confirm secure device handshaking protocols for <br />
        <span className="text-white">TLS-encrypted MQTT communication</span>.
      </p>
    </AuthLayout>
  );
}
