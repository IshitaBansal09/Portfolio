import { motion } from "framer-motion";
import HeroImg from "@/assets/images/IshitaPhotoCropped.jpeg";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { Cloud, Database, Trophy, Layers } from "lucide-react";

const stats = [
  { label: "Projects Built",  value: "3+",   icon: Layers,  color: "text-blue-400",   bg: "bg-blue-400/10"   },
  { label: "DSA Problems",    value: "400+",  icon: Trophy,  color: "text-teal-400",   bg: "bg-teal-400/10"   },
  { label: "Technologies",    value: "15+",   icon: Database,color: "text-purple-400", bg: "bg-purple-400/10" },
  { label: "Cloud Platform",  value: "AWS",   icon: Cloud,   color: "text-orange-400", bg: "bg-orange-400/10" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section className="py-28 bg-[#020617] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-5">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Building systems that{" "}
            <span className="gradient-text">actually ship</span>
          </h2>
        </motion.div>

        {/* Photo + Bio */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

          {/* Photo */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-400 to-teal-400 shadow-2xl shadow-blue-500/10">
              <img
                src={HeroImg}
                alt="Ishita Bansal"
                className="w-full rounded-[14px] block object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-gray-900 border border-gray-700/80 rounded-xl px-4 py-2.5 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">Open to work</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-gray-200 text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Ishita Bansal</span> — a full-stack developer who enjoys building systems that actually run in production, not just demos that look good on a portfolio.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My work spans modern React and Next.js frontends backed by Node.js services, REST APIs, and cloud-native AWS infrastructure. I've built AI-driven platforms, auth-heavy applications, and automated deployment pipelines with Docker and ECS Fargate.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I care about clarity in code, simplicity in architecture, and shipping solutions that deliver real value. Alongside building products, I regularly solve DSA problems to keep my engineering foundations sharp.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/IshitaBansal09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all text-sm font-medium"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bansalishita59"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-500/40 transition-all text-sm font-medium"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/__IshitaBansal__/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-orange-400 hover:border-orange-500/40 transition-all text-sm font-medium"
              >
                <FaCode className="w-4 h-4" />
                LeetCode
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-600 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
