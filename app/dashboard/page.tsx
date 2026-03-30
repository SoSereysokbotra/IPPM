"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ThemeToggle } from "../../components/ui/theme-toggle"; // Adjust path as needed
import {
  LayoutDashboard,
  Activity,
  TrendingUp,
  AlertCircle,
  Settings,
  Menu,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import LiveTelemetryTab from '../components/LiveTelemetry'

// Updated to reflect the 5 core tabs of the iPPM Platform
const NAV_ITEMS = [
  { name: "Live Telemetry", icon: Activity },
  { name: "Analytics & Reports", icon: TrendingUp },
  { name: "Command & Control", icon: LayoutDashboard },
  { name: "Predictive Maintenance", icon: AlertCircle },
  { name: "System Configuration", icon: Settings },
];

export default function PersonalAdminDashboard() {
  // Set the default tab to Live Telemetry
  const [activeTab, setActiveTab] = useState("Live Telemetry");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarOpen, setIsTopBarOpen] = useState(true);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg font-sans text-gray-800 dark:text-gray-300 flex flex-col selection:bg-brand-primary selection:text-white">
      {/* Top Navigation Bar Wrapper */}
      <motion.div
        animate={{
          height: isTopBarOpen ? "auto" : 0,
          opacity: isTopBarOpen ? 1 : 0,
        }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-50 overflow-hidden bg-white/90 dark:bg-[#0e1319]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/60"
      >
        <header className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo element representing iPPM project style */}
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer group">
              <div className="w-8 h-8 rounded bg-gray-100 dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-brand-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <span>
                i<span className="text-brand-primary">PPM</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-brand-primary/10 text-brand-primary shadow-[inset_0_-2px_0_0_var(--color-brand-primary)]"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <item.icon
                      className={`w-4 h-4 ${isActive ? "text-brand-primary" : "text-gray-500"}`}
                    />
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User / Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="hidden sm:flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(26,115,232,0.2)] hover:shadow-[0_0_20px_rgba(26,115,232,0.4)]">
              New Entry
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 overflow-hidden cursor-pointer hover:border-brand-primary transition-colors">
              {/* Using a placeholder avatar consistent with industrial theme */}
              <img
                src="https://ui-avatars.com/api/?name=Admin&background=15191e&color=ff5e3a"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="w-px h-6 bg-gray-800 hidden sm:block mx-1"></div>

            {/* Close Top Bar Button */}
            <button
              className="flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              onClick={() => {
                setIsTopBarOpen(false);
                setIsMobileMenuOpen(false);
              }}
              title="Close Top Bar"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </header>
      </motion.div>

      {/* Open Top Bar Floating Button */}
      {!isTopBarOpen && (
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] bg-[#15191e] border border-gray-800 border-t-0 rounded-b-xl px-6 py-1.5 text-gray-500 hover:text-brand-primary hover:bg-[#1a1f26] transition-all shadow-lg flex items-center justify-center group"
          onClick={() => setIsTopBarOpen(true)}
          title="Open Top Bar"
        >
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      )}

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white dark:bg-[#15191e] border-b border-gray-200 dark:border-gray-800/60 px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                activeTab === item.name
                  ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/20"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white border border-transparent"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </motion.div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
              {activeTab} Overview
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Welcome back. Here&apos;s what&apos;s happening today on the
              factory floor.
            </p>
          </div>
        </motion.div>

        {/* Render Tab Content */}
        {activeTab === "Live Telemetry" ? (
          <LiveTelemetryTab />
        ) : (
          <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              The{" "}
              <span className="font-semibold text-brand-primary">
                {activeTab}
              </span>{" "}
              component is under construction.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
