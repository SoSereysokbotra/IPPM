"use client";

import Link from "next/link";
import AuthLayout from "../../../components/ui/AuthLayout";

export default function ResetPassword() {
  return (
    <AuthLayout
      rightImage={{
        src: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773386708/pexels-cottonbro-4709369_ys1qfj.jpg",
        alt: "iPPM Digital Twin Monitoring",
        className: "grayscale-[40%]",
      }}
      rightOverlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-secondary/10 backdrop-blur-[1px]"></div>
        </>
      }
      rightContent={
        <>
          <h2 className="text-3xl xl:text-4xl font-medium text-white mb-4 leading-tight">
            Reclaim Your <br />
            <span className="text-secondary">Command Centre.</span>
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed text-sm xl:text-base">
            Once updated, you will have immediate access to live telemetry,
            real-time vision reports, and predictive maintenance schedules.
          </p>

          {/* Security Note */}
          <div className="mt-8 flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 w-fit">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-dark-bg bg-brand-primary flex items-center justify-center text-[10px] font-bold">
                i
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-dark-bg bg-secondary flex items-center justify-center text-[10px] font-bold">
                P
              </div>
            </div>
            <p className="text-xs text-muted">
              Active Sessions will be terminated for security.
            </p>
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
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          New Password<span className="text-secondary">.</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Your identity has been verified. Please choose a strong, unique
          password to secure your factory's data pipeline.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* New Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
            required
          />
        </div>

        {/* Strength Meter Placeholder */}
        <div className="flex gap-1.5 pt-1">
          <div className="h-1 w-full rounded-full bg-secondary"></div>
          <div className="h-1 w-full rounded-full bg-secondary"></div>
          <div className="h-1 w-full rounded-full bg-secondary"></div>
          <div className="h-1 w-full rounded-full bg-dark-border"></div>
        </div>
        <p className="text-[10px] text-muted uppercase tracking-wider">
          Strength: Strong
        </p>

        <button
          type="submit"
          className="w-full px-6 py-3.5 mt-4 rounded-xl bg-secondary hover:bg-secondary/90 transition-colors text-white text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        >
          Update Password & Login
        </button>
      </form>
    </AuthLayout>
  );
}
