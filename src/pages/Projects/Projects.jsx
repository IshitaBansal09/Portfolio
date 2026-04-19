import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "SmartLearn Hub",
    subtitle: "AI-Powered Learning Platform",
    description:
      "Built an AI-driven learning platform using Next.js and PostgreSQL that dynamically generates personalized course content via Gemini API. Implemented secure authentication with Clerk and optimized data workflows using Drizzle ORM.",
    image: "/coursegpt.png",
    color: "#4F46E5",
    tags: ["Next.js", "PostgreSQL", "Gemini API", "Clerk", "Drizzle ORM"],
    githubLink: "https://github.com/IshitaBansal09/CourseGPT",
    liveLink: "https://github.com/IshitaBansal09/CourseGPT",
  },
  {
    title: "AI Resume Builder",
    subtitle: "Full-Stack Resume Generator",
    description:
      "Developed a full-stack AI resume builder with real-time content suggestions using React, Strapi, and Clerk authentication. Focused on responsive UX and scalable content generation workflows.",
    image: "/resume-builder.jpg",
    color: "#059669",
    tags: ["React", "Strapi", "Clerk", "AI", "REST API"],
    githubLink: "https://github.com/IshitaBansal09/AI-Resume-Builder",
    liveLink: "https://github.com/IshitaBansal09/AI-Resume-Builder",
  },
  {
    title: "RepoDeployer",
    subtitle: "Cloud Deployment Pipeline",
    description:
      "Engineered a cloud-native deployment system that clones Git repositories, builds React apps in isolated Docker containers, and deploys via AWS ECS Fargate. Implemented Redis + Socket.IO for real-time log streaming.",
    image: "/repodeployer.svg",
    color: "#D97706",
    tags: ["Node.js", "Docker", "AWS ECS", "AWS S3", "Socket.IO"],
    githubLink: "https://github.com/IshitaBansal09/repodeployer",
    liveLink: "https://github.com/IshitaBansal09/repodeployer",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div className="bg-[#0a0f1e] text-white">

        {/* Section header */}
        <div className="pt-28 pb-4 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-5">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Real products built with modern stacks — from AI platforms to cloud deployment pipelines.
            </p>
          </motion.div>
        </div>

        {/* Stacking cards */}
        <main ref={container} className="relative">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </div>
    </ReactLenis>
  );
}

function Card({ i, project, progress, range, targetScale }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { title, subtitle, description, image, color, tags, githubLink, liveLink } = project;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative -top-[25%] w-full max-w-5xl origin-top"
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/80">

          {/* Image */}
          <div className="w-full md:w-[55%] h-[220px] md:h-[420px] relative overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.25 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[45%] p-7 md:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <div className="h-px flex-1 bg-gray-700" />
              </div>
              <p className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-2">{subtitle}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="h-px bg-gray-800 mb-6" />
              <div className="flex items-center gap-5">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <HiExternalLink className="w-4 h-4" />
                  Live
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  project: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
};
