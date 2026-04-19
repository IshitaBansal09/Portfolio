import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import { FlipWords } from "@/components/ui/flip-words";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

const code = `const profile = {
  name:    "Ishita Bansal",
  role:    "Full-Stack Developer",
  stack:   ["React", "Next.js", "Node.js",
            "Express", "PostgreSQL", "MongoDB"],
  cloud:   ["AWS ECS", "AWS S3", "Docker"],
  dsa:     "400+ problems solved",

  hardWorker:    true,
  quickLearner:  true,
  problemSolver: true,

  hireable() {
    return this.hardWorker && this.problemSolver;
  },
};`;

export default function Hero() {
  const words = ["Full-Stack Developer", "Cloud Enthusiast", "Problem Solver"];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <GridBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-24 pb-16">

          {/* ── Left column ── */}
          <div className="w-full lg:w-1/2 space-y-6">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <div>
              <p className="text-gray-400 text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Ishita</span>
                <br />
                <span className="text-white">Bansal</span>
              </h1>
            </div>

            {/* Role flip */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <FlipWords
                className="text-lg sm:text-xl text-blue-300 font-medium"
                words={words}
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Building AI-powered web apps and cloud-native systems with the MERN stack and AWS. Passionate about clean architecture and shipping real products.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/IshitaBansal09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://drive.google.com/drive/folders/1g3N4az5lujrEco2omsnwwVkAla516U7p?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-200 font-semibold hover:border-gray-500 hover:text-white hover:scale-105 transition-all duration-200"
              >
                <HiDownload className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/IshitaBansal09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bansalishita59"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <div className="h-4 w-px bg-gray-700" />
              <span className="text-gray-500 text-sm">
                NIT Hamirpur · B.Tech EE
              </span>
            </div>
          </div>

          {/* ── Right column: code window ── */}
          <div className="w-full lg:w-1/2">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500" />
                  <div className="window-dot bg-yellow-500" />
                  <div className="window-dot bg-green-500" />
                  <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript !text-sm">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500 text-xs animate-bounce">
          <span>Scroll down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>
    </main>
  );
}
