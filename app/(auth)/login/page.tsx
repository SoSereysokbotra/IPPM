"use client";

import Image from "next/image";
import Link from "next/link";
import AuthLayout from "../../components/ui/AuthLayout";

export default function Login() {
  return (
    <AuthLayout
      leftTopContent={
        <Link
          href="/"
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
          Back to Home
        </Link>
      }
      rightImage={{
        src: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773408890/pexels-freek-wolsink-508219-34207359_r7kekf.jpg",
        alt: "iPPM Command Centre",
      }}
      rightOverlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
        </>
      }
      rightContent={
        <>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            System Status: Optimal
          </div>

          <h2 className="text-3xl xl:text-4xl font-medium text-white mb-4 leading-tight tracking-tight">
            Eliminate Downtime with <br /> Predictive Maintenance.
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed text-sm xl:text-base">
            Forecast equipment failures before they happen and monitor live
            telemetry through our four-layered IoT cloud architecture.
          </p>
        </>
      }
    >
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Welcome back<span className="text-brand-primary">.</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Log in to your Intelligent PPM dashboard to monitor your factory floor
          and access real-time vision intelligence.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="factory.manager@example.com"
            className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            required
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            required
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 rounded bg-dark-surface border-dark-border text-brand-primary focus:ring-brand-primary/50 focus:ring-offset-dark-bg"
          />
          <label htmlFor="remember" className="text-sm text-muted">
            Remember this device for 30 days
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3.5 mt-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover transition-colors text-white text-sm font-medium shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)]"
        >
          Access Command Centre
        </button>
      </form>

      {/* Footer / Signup prompt */}
      <p className="mt-8 text-center text-sm text-muted">
        Don't have an enterprise account?{" "}
        <a
          href="#"
          className="text-white hover:text-brand-primary font-medium transition-colors"
        >
          Request access
        </a>
      </p>
    </AuthLayout>
  );
}
