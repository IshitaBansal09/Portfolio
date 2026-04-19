import { motion } from "framer-motion";
import IconCloudDemo from "@/components/globe";
import { Code2, Server, Database, Layout, Cloud, Cpu } from "lucide-react";
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress,
  SiMysql, SiVite, SiGithub,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const categories = [
  {
    icon: Code2,
    title: "Languages",
    color: "text-blue-400",
    border: "hover:border-blue-500/40",
    glow: "group-hover:shadow-blue-500/10",
    skills: [
      { name: "C++",        icon: <Code2 className="w-4 h-4 text-blue-400" /> },
      { name: "JavaScript", icon: <span className="text-yellow-400 font-bold text-sm">JS</span> },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "text-purple-400",
    border: "hover:border-purple-500/40",
    glow: "group-hover:shadow-purple-500/10",
    skills: [
      { name: "React.js",    icon: <FaReact className="w-4 h-4 text-cyan-400" /> },
      { name: "Next.js",     icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
      { name: "Tailwind CSS",icon: <SiTailwindcss className="w-4 h-4 text-sky-400" /> },
      { name: "ShadCN UI",   icon: <span className="text-white font-bold text-sm">SC</span> },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    glow: "group-hover:shadow-emerald-500/10",
    skills: [
      { name: "Node.js",    icon: <FaNodeJs className="w-4 h-4 text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-gray-300" /> },
      { name: "REST APIs",  icon: <span className="text-gray-300 font-bold text-xs">API</span> },
      { name: "Auth Systems",icon: <span className="text-yellow-400 font-bold text-xs">🔐</span> },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-cyan-500/10",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-blue-400" /> },
      { name: "MongoDB",    icon: <SiMongodb className="w-4 h-4 text-green-500" /> },
      { name: "MySQL",      icon: <SiMysql className="w-4 h-4 text-orange-400" /> },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "text-orange-400",
    border: "hover:border-orange-500/40",
    glow: "group-hover:shadow-orange-500/10",
    skills: [
      { name: "AWS S3",   icon: <FaAws className="w-4 h-4 text-orange-400" /> },
      { name: "AWS ECS",  icon: <FaAws className="w-4 h-4 text-orange-400" /> },
      { name: "AWS ECR",  icon: <FaAws className="w-4 h-4 text-orange-400" /> },
      { name: "Docker",   icon: <FaDocker className="w-4 h-4 text-sky-400" /> },
    ],
  },
  {
    icon: Cpu,
    title: "Tools",
    color: "text-pink-400",
    border: "hover:border-pink-500/40",
    glow: "group-hover:shadow-pink-500/10",
    skills: [
      { name: "Git",     icon: <FaGitAlt className="w-4 h-4 text-orange-500" /> },
      { name: "GitHub",  icon: <SiGithub className="w-4 h-4 text-gray-300" /> },
      { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-blue-400" /> },
      { name: "Vite",    icon: <SiVite className="w-4 h-4 text-purple-400" /> },
      { name: "Postman", icon: <span className="text-orange-400 font-bold text-xs">PM</span> },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section className="py-28 bg-[#0a0f1e] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-medium text-teal-400 bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full mb-5">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Icon cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-14"
        >
          <IconCloudDemo />
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-xl ${cat.border} ${cat.glow}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gray-800/80 group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-gray-300 text-sm hover:border-gray-500 hover:text-white transition-all duration-200"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
