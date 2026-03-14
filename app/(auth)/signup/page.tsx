"use client";

import Link from "next/link";
import AuthLayout from "../../components/ui/AuthLayout";

export default function Signup() {
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
        src: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773408879/pexels-tanhatamannasyed-35652456_cdywmx.jpg",
        alt: "iPPM Precision",
      }}
      rightOverlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg via-dark-bg/40 to-transparent"></div>
          {/* Top Logo Area specific to Signup */}
          <div className="absolute top-12 left-12 right-12 z-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center font-bold">
                i
              </div>
              <span className="text-xl font-bold tracking-tight">
                iPPM
              </span>
            </div>
          </div>
        </>
      }
      rightContent={
        <>
          <h2 className="text-3xl xl:text-4xl font-medium text-white mb-4 leading-tight">
            High-Resolution <br />
            <span className="text-secondary">Precision Monitoring.</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                01
              </div>
              <p className="text-sm text-white/80">
                Connect ESP32 sensors in minutes.
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                02
              </div>
              <p className="text-sm text-white/80">
                Real-time Vision AI via Mobile or IoT Cameras.
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                03
              </div>
              <p className="text-sm text-white/80">
                99%+ Uptime with Secure TLS Encryption.
              </p>
            </div>
          </div>
        </>
      }
    >
      <div className="mt-25">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Register Factory<span className="text-brand-primary">.</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
          Join the smart manufacturing revolution in Cambodia. Set up your
          industrial account and connect your first IoT nodes.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Sophea Mean"
              className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:outline-none focus:border-brand-primary transition-all text-sm mt-1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              placeholder="PP Tech Garments"
              className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:outline-none focus:border-brand-primary transition-all text-sm mt-1"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Work Email
          </label>
          <input
            type="email"
            placeholder="admin@factory.com"
            className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:outline-none focus:border-brand-primary transition-all text-sm"
          />
        </div>

        {/* Industry Selection - Localized to your Project Context */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Primary Industry
          </label>
          <select className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:outline-none focus:border-brand-primary transition-all text-sm appearance-none">
            <option>Garment & Textile</option>
            <option>Electronics Assembly</option>
            <option>Smart Agri-Tech</option>
            <option>General Manufacturing</option>
          </select>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Create Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white focus:outline-none focus:border-brand-primary transition-all text-sm"
          />
          <p className="text-[10px] text-muted">
            Must be at least 8 characters with 1 symbol.
          </p>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 rounded bg-dark-surface border-dark-border text-brand-primary focus:ring-brand-primary/50"
          />
          <label className="text-xs text-muted leading-normal">
            I agree to the{" "}
            <span className="text-white underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and acknowledge the{" "}
            <span className="text-white underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            regarding industrial data encryption.
          </label>
        </div>

        {/* Submit */}
        <button className="w-full px-6 py-3.5 mt-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover transition-colors text-white text-sm font-medium">
          Create Enterprise Account
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-white hover:text-brand-primary font-medium transition-colors"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
