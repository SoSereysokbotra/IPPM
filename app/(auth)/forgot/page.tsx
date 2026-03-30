"use client";

import Link from "next/link";
import AuthLayout from "../../components/ui/AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout
      leftTopContent={
        <Link
          href="/login"
          className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors text-sm flex items-center gap-2"
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
          Back to Login
        </Link>
      }
      rightImage={{
        src: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773387153/pexels-chuck-2973392_t3hik9.jpg",
        alt: "iPPM Industrial Continuity",
        className: "grayscale-[30%]",
      }}
      rightOverlay={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white dark:from-dark-bg/20 dark:via-transparent dark:to-dark-bg"></div>
          <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply"></div>
        </>
      }
      rightContent={
        <>
          <h2 className="text-3xl xl:text-4xl font-medium text-gray-900 dark:text-white mb-4 leading-tight">
            Maintain Production <br />
            <span className="text-secondary">Continuity.</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-md leading-relaxed text-sm xl:text-base">
            iPPM ensures that even during account recovery, your IoT nodes
            continue to log critical production data to the cloud.
          </p>

          {/* Quick Support Links */}
          <div className="mt-8 flex gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-muted mb-1">
                Tech Support
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">dev@ippm-cloud.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-muted mb-1">
                Response Time
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Under 2 hours</span>
            </div>
          </div>
        </>
      }
      selectionColor="selection:bg-secondary selection:text-white"
    >
      <div className="mb-10">
        <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A855F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.5-2.5" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Reset Password<span className="text-secondary">.</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Enter your registered work email. We will send you a secure link
          to reset your credentials and restore your dashboard access.
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="admin@factory-pp.com"
            className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary/90 transition-colors text-white text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-12 p-4 rounded-xl bg-gray-100/50 dark:bg-dark-surface/50 border border-gray-200 dark:border-dark-border flex items-start gap-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p className="text-xs text-muted leading-relaxed">
          For security reasons, reset links expire after 1 hour. If you are
          an operator and lost access during a production cycle, please
          contact your Factory Manager.
        </p>
      </div>
    </AuthLayout>
  );
}
