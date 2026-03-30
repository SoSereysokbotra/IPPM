"use client";

import Image from "next/image";
import MapIllustration from "./components/ui/MapIllustration"; // Ensure this path is correct
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../components/ui/theme-toggle";

export default function IPPMHero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const features = [
    {
      id: "architecture",
      label: "Architecture",
      title: "Four-Layered IoT Cloud Architecture",
      description:
        "Our modular design spans from physical ESP32 controllers to a high-performance FastAPI cloud backend. Seamlessly integrate sensors and cameras to turn your shop floor into a data-driven ecosystem.",
      img: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773385755/photo_2026-03-13_14-07-29-Photoroom_ex2ml0.png",
      tags: ["ESP32", "FastAPI", "Cloud", "Sensors"],
    },
    {
      id: "vision",
      label: "Vision AI",
      title: "Advanced Vision AI with OpenCV & YOLO",
      description:
        "Detect thread jams, fabric misalignment, or component defects in real-time. Utilize mobile phone cameras or embedded ESP32 AI sensors to achieve over 90% detection accuracy in controlled industrial settings.",
      img: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773385755/photo_2026-03-13_14-07-33-Photoroom_taddqz.png",
      tags: ["OpenCV", "YOLO", "AI Sensor", "Accuracy"],
    },
    {
      id: "maintenance",
      label: "Predictive",
      title: "Predictive Maintenance Eliminates Downtime",
      description:
        "Forecast equipment failures before they happen. By monitoring vibration and temperature trends with Scikit-learn models, iPPM reduces maintenance costs by 20–35% and extends machinery lifespan.",
      img: "https://res.cloudinary.com/dg5grwcd5/image/upload/v1773384648/748ac8b6-9a83-46bf-b192-9f8e40027ca2_1_-Photoroom_gjq0rz.png",
      tags: ["Scikit-learn", "Vibration", "Temperature"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate total scrollable distance inside this container
      const maxScroll = height - viewportHeight;
      const currentScroll = -top;

      // Clamp progress between 0 and 1
      let progress = currentScroll / maxScroll;
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to the current feature index
      const index = Math.round(progress * (features.length - 1));
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, features.length]);

  const Header = () => (
    <header className="w-full flex justify-between items-center py-6 px-6 lg:px-16 absolute top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex-1 flex justify-start">
        <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1 cursor-pointer">
          i<span className="text-brand-primary">PPM</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 bg-white/80 dark:bg-dark-bg/40 backdrop-blur-md px-8 py-3 rounded-full border border-gray-200 dark:border-gray-800/60">
        <a
          href="#"
          className="text-xs tracking-[0.15em] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase transition-colors"
        >
          Features
        </a>
        <a
          href="#"
          className="text-xs tracking-[0.15em] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase transition-colors"
        >
          Applications
        </a>
        <a
          href="#"
          className="text-xs tracking-[0.15em] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase transition-colors"
        >
          Architecture
        </a>
        <a
          href="#"
          className="text-xs tracking-[0.15em] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase transition-colors"
        >
          Profile
        </a>
      </nav>

      {/* Action Buttons */}
      <div className="flex-1 flex items-center justify-end gap-6">
        <ThemeToggle />
        <a
          href="#"
          className="hidden sm:block text-xs tracking-[0.1em] font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white uppercase transition-colors"
        >
          Log In
        </a>
        <button className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 text-xs tracking-[0.1em] font-bold uppercase transition-colors duration-300 shadow-[0_0_15px_rgba(26,115,232,0.3)] hover:shadow-[0_0_25px_rgba(26,115,232,0.5)]">
          Get Started
        </button>
      </div>
    </header>
  );

  return (
    // FIX 1: Removed `overflow-hidden` from the root to allow `position: sticky` to work.
    <div className="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white font-sans selection:bg-brand-primary selection:text-white w-full">
      {/* ========================================
        HERO SECTION (100vh)
        ======================================== */}
      {/* Kept overflow hidden ONLY on the hero section so the circle and text don't break horizontal scroll */}
      <div className="bg-gray-50 dark:bg-dark-bg relative min-h-screen w-full flex flex-col overflow-hidden">
        <Header />

        {/* --- Background Elements --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-0 pointer-events-none select-none">
          <span className="text-[16vw] font-black text-black/[0.04] dark:text-white/[0.04] leading-none tracking-tighter whitespace-nowrap">
            IPPM
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[40%] lg:top-1/2 left-1/2 -translate-y-1/2 translate-x-[10%] lg:translate-x-[40%] w-48 h-48 lg:w-[22rem] lg:h-[22rem] border-[12px] lg:border-[16px] border-brand-primary rounded-full z-0 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[580px] h-[65vh] lg:h-[85vh] z-20 pointer-events-none flex justify-center items-center"
        >
          <img
            src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773384648/748ac8b6-9a83-46bf-b192-9f8e40027ca2_1_-Photoroom_gjq0rz.png"
            alt="Device Image"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* --- Main Content Grid --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-between relative z-30 px-6 lg:px-16 pt-32 pb-12 w-full max-w-[1800px] mx-auto"
        >
          <div className="flex-1 flex items-center justify-between pointer-events-none mt-10 lg:mt-0">
            <motion.div variants={fadeUp} className="pointer-events-auto z-30">
              <h1 className="text-6xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                Next-Gen <br />
                Manufacturing
              </h1>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-0 mt-auto pointer-events-auto pb-4">
            <motion.div
              variants={fadeUp}
              className="max-w-[320px] bg-white/60 dark:bg-dark-bg/60 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-5 lg:p-0 rounded-xl lg:rounded-none relative z-30"
            >
              <h3 className="text-sm font-semibold mb-3 tracking-wide text-gray-800 dark:text-white">
                Intelligent Cloud Platform.
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Empowering SMEs with IoT-driven adaptive automation and
                real-time vision intelligence.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-24 h-[2px] bg-gray-300 dark:bg-gray-700 relative">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-brand-primary"></div>
                </div> 
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="max-w-[320px] flex flex-col items-start lg:items-end text-left lg:text-right bg-white/60 dark:bg-dark-bg/60 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-5 lg:p-0 rounded-xl lg:rounded-none z-30"
            >
              <h3 className="text-sm font-semibold mb-3 tracking-wide text-gray-800 dark:text-white">
                The Workflow.
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 lg:ml-auto">
                3D Digital Twin monitoring designed exclusively for the modern
                factory floor.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========================================
        FEATURE SCROLL SECTION
        ======================================== */}
      <div className="pt-32 pb-16 px-4 w-full flex justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-medium text-center tracking-tight text-gray-900 dark:text-white"
        >
          Why Choose <span className="text-secondary">iPPM</span> for Your
          Production?
        </motion.h2>
      </div>

      <div
        ref={containerRef}
        className="relative bg-gray-100 dark:bg-[#1c2128] text-gray-900 dark:text-white w-full"
        style={{ height: `${features.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl w-full flex flex-col md:flex-row px-8 lg:px-12 relative h-full items-center">
            {/* LEFT SIDE: Navigation & Text */}
            {/* Increased height from h-[400px] to min-h-[500px] to fit larger text */}
            <div className="w-full md:w-1/2 flex min-h-[500px] items-center">
              {/* Column 1: Labels */}
              <div className="hidden sm:flex w-1/4 flex-col justify-center gap-12 items-end pr-8 py-10 relative h-full">
                {features.map((feature, i) => (
                  <div
                    key={feature.id}
                    className={`text-base tracking-wide transition-colors duration-500 ${
                      activeIndex === i
                        ? "text-white font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {feature.label}
                  </div>
                ))}

                {/* Vertical Line Track */}
                <div className="absolute right-0 top-1/4 bottom-1/4 w-[2px] bg-gray-800 rounded-full">
                  <motion.div
                    className="absolute w-[4px] -left-[1px] bg-white rounded-full"
                    animate={{
                      top: `${(activeIndex / (features.length - 1)) * 100}%`,
                      y:
                        activeIndex === 0
                          ? "0%"
                          : activeIndex === features.length - 1
                            ? "-100%"
                            : "-50%",
                      height: "40px",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* Column 2: Active Feature Details */}
              <div className="w-full sm:w-3/4 sm:pl-10 relative h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute w-full pr-4"
                  >
                    {/* Increased Title Size */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6 tracking-tight">
                      {features[activeIndex].title}
                    </h3>

                    {/* Increased Description Size */}
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
                      {features[activeIndex].description}
                    </p>

                    <div className="flex gap-4 items-center mb-4">
                      {features[activeIndex].tags.slice(0, 3).map((tag, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-[#252a31]"
                        >
                          <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                        </div>
                      ))}
                    </div>
                    {/* Increased Tag Text Size */}
                    <div className="text-sm lg:text-base text-gray-500 font-medium">
                      {features[activeIndex].tags.join(" • ")}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT SIDE: Device Images */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center h-1/2 md:h-full mt-12 md:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px] aspect-square flex items-center justify-center"
                >
                  <img
                    src={features[activeIndex].img}
                    alt={features[activeIndex].title}
                    className="w-full h-full object-contain drop-shadow-2xl z-10 scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 dark:to-[#1c2128] z-20 pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT EDGE: Pagination Dots */}
            <div className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex-col gap-6">
              {features.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "bg-white ring-4 ring-white/20"
                      : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
        EVERYDAY USE CASES SECTION
        ======================================== */}
      {/* Kept overflow hidden here to protect image scalings from bleeding over */}
      <div className="w-full pt-24 pb-32 overflow-hidden px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-center tracking-tight leading-[1.15] mb-16"
        >
          Real-World Applications <br />
          <span className="text-secondary">The Cambodian Context</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden group bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773387153/pexels-chuck-2973392_t3hik9.jpg"
                  alt="Garment Industry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
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

            <div className="relative w-full h-[350px] rounded-3xl overflow-hidden group bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773386990/pexels-zakhar-9407601_jpbr7t.jpg"
                  alt="Smart Agri-Tech"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
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
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="relative w-full h-[350px] rounded-3xl overflow-hidden group bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773386708/pexels-cottonbro-4709369_ys1qfj.jpg"
                  alt="Electronics Assembly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
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

            <div className="relative w-full h-[504px] rounded-3xl overflow-hidden group bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773387072/pexels-tima-miroshnichenko-5380664_api0pc.jpg"
                  alt="Digital Command Centre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
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
          </motion.div>
        </div>
      </div>

      {/* ========================================
        CONTACT & FOOTER
        ======================================== */}
      <div className="w-full relative py-24 px-4 sm:px-8 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl relative flex flex-col items-center"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-brand-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">
              Deployment & Integration
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Industrial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-[#60a5fa]">
                Partnerships
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Ready to digitize your production line? Connect with our
              engineering team to architect a custom edge-computing solution for
              your facility.
            </p>
          </div>

          <MapIllustration />

          {/* Contact Info Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1: Tech Support */}
            <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800/60 p-8 hover:border-brand-primary/50 transition-colors group relative rounded-sm">
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-2 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                Technical Support
              </h4>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Direct line to our systems architecture team for integration
                inquiries.
              </p>
              <a
                href="mailto:dev@ippm-cloud.com"
                className="text-gray-600 dark:text-gray-300 font-mono text-sm group-hover:text-brand-primary transition-colors border-b border-gray-300 dark:border-gray-700 group-hover:border-brand-primary pb-1"
              >
                dev@ippm-cloud.com
              </a>
            </div>

            {/* Card 2: Location */}
            <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800/60 p-8 hover:border-brand-primary/50 transition-colors group relative rounded-sm">
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-2 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-brand-primary transition-colors"></span>
                HQ Location
              </h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Hardware development and testing facility.
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-mono text-sm leading-relaxed">
                Traeng Trayueng,
                <br />
                Kampong Speu Province,
                <br />
                Cambodia
              </p>
            </div>

            {/* Card 3: Network Status */}
            <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800/60 p-8 hover:border-brand-primary/50 transition-colors group relative rounded-sm flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-gray-900 dark:text-white text-lg font-bold">Network Status</h4>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              </div>
              <div className="flex justify-between items-center mb-3 border-b border-gray-200 dark:border-gray-800/50 pb-2">
                <span className="text-gray-500 text-sm">
                  Cloud Infrastructure
                </span>
                <span className="text-green-500 dark:text-green-400 font-mono text-sm">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Edge Node Uptime</span>
                <span className="text-green-500 dark:text-green-400 font-mono text-sm">99.98%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================
        ENGINEERING PROFILE (SpaceX Style)
        ======================================== */}
      <div className="w-full py-32 px-4 sm:px-8 flex justify-center overflow-hidden relative">
        <div className="w-full max-w-6xl relative flex flex-col lg:flex-row items-center justify-end">
          {/* Vertical Navigation */}
          <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-center gap-20 text-xs tracking-[0.3em] uppercase text-gray-400 z-30">
            <span className="origin-center -rotate-90 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">
              Projects
            </span>
            <span className="origin-center -rotate-90 cursor-pointer text-gray-900 dark:text-white font-bold border-b-2 border-brand-primary pb-1">
              Profile
            </span>
            <span className="origin-center -rotate-90 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">
              Skills
            </span>
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[85%] bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800/60 shadow-2xl rounded-sm relative flex flex-col lg:flex-row pt-[180px] lg:pt-0 pb-12 lg:pb-20 pr-8 lg:pr-20 pl-8 lg:pl-[380px] mt-[150px] lg:mt-0"
          >
            {/* Overlapping Foreground Image (Your Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 lg:top-1/2 left-1/2 lg:left-[-10%] -translate-x-1/2 lg:translate-x-0 -translate-y-[45%] lg:-translate-y-1/2 w-[280px] sm:w-[320px] lg:w-[420px] h-[350px] sm:h-[400px] lg:h-[550px] z-20 bg-[#cbd5e1] rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-gray-700/50"
            >
              <img
                // REPLACE THIS URL WITH YOUR ACTUAL PHOTO
                src="https://res.cloudinary.com/dg5grwcd5/image/upload/v1773481543/photo_2026-03-14_16-45-30_ep1rc9.jpg"
                alt="Engineering Lead Portrait"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>

            {/* Right Side Content Area */}
            <div className="w-full flex flex-col justify-center relative z-10 text-center lg:text-left">
              {/* Orange Accent Line */}
              <div className="w-12 h-[2px] bg-brand-primary mx-auto lg:mx-0 mb-6"></div>

              {/* REPLACE WITH YOUR NAME */}
              <h3 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight text-white">
                So Sereysokbotra
              </h3>

              {/* REPLACE WITH YOUR EXACT ROLE */}
              <p className="text-[#8a8a8c] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold mb-8">
                Lead Systems Engineer / Developer
              </p>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Architecting the backbone of the iPPM platform. Specialized in
                bridging the gap between high-performance edge computing
                hardware and scalable, user-centric web applications. Focused on
                advancing the state of real-time telemetry and vision AI
                integration.
              </p>

              {/* Engineering Stats / Skills Grid */}
              <div className="grid grid-cols-2 gap-6 mb-12 text-left max-w-lg mx-auto lg:mx-0 border-t border-gray-800 pt-8">
                <div>
                  <h5 className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-1">
                    Focus
                  </h5>
                  <p className="text-sm text-gray-300">System Architecture</p>
                </div>
                <div>
                  <h5 className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-1">
                    Core Stack
                  </h5>
                  <p className="text-sm text-gray-300">React, Node, Python</p>
                </div>
                <div>
                  <h5 className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-1">
                    Hardware
                  </h5>
                  <p className="text-sm text-gray-300">ESP32, IoT Protocols</p>
                </div>
                <div>
                  <h5 className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-1">
                    Experience
                  </h5>
                  <p className="text-sm text-gray-300">5+ Years</p>
                </div>
              </div>

              {/* Bottom Row: Signature & Nav Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-auto border-t border-gray-800/50 pt-6">
                {/* Social Links / Contact - Replaces the signature */}
                <div className="flex gap-6 mb-6 sm:mb-0">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-bold"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-bold"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-bold"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================
        FOOTER (High-Tech / Industrial Style)
        ======================================== */}
      <footer className="relative w-full mt-24 pt-16 pb-[18vw] sm:pb-[14vw] lg:pb-[12vw] px-4 sm:px-8 lg:px-12 bg-gray-100 dark:bg-[#15191e] border-t border-gray-200 dark:border-gray-800/60 overflow-hidden">
        {/* Top Grid Section */}
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Tagline */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              i<span className="text-brand-primary">PPM</span>
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The next generation of industrial IoT and Vision AI. Real-time
              telemetry and edge computing for modern production lines.
            </p>
            {/* Simple Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors text-gray-500 dark:text-gray-400"
              >
                <span className="text-xs font-bold">IN</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-colors text-gray-500 dark:text-gray-400"
              >
                <span className="text-xs font-bold">GH</span>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col">
            <h5 className="text-gray-900 dark:text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Platform
            </h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Edge Nodes</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Vision AI</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Telemetry Dashboard</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">API Documentation</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col">
            <h5 className="text-gray-900 dark:text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Company
            </h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Engineering Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Status & Location */}
          <div className="flex flex-col">
            <h5 className="text-gray-900 dark:text-white text-sm font-semibold uppercase tracking-wider mb-6">
              System Status
            </h5>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                All Nodes Operational
              </span>
            </div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
              HQ Location
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Traeng Trayueng, Kampong Speu
              <br />
              Cambodia
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="relative z-20 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} iPPM Platform. Empowering
            Cambodia&apos;s Industrial Future.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Massive Background Text & Gradient */}
        <h3 className="absolute bottom-[-10px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 text-[14vw] sm:text-[10vw] font-bold tracking-tighter z-0 opacity-[0.06] dark:opacity-[0.03] whitespace-nowrap text-black dark:text-white pointer-events-none select-none ">
          INTELLIGENT PPM
        </h3>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-brand-primary opacity-[0.03] blur-[80px] rounded-full pointer-events-none z-0"></div>
      </footer>
    </div>
  );
}
