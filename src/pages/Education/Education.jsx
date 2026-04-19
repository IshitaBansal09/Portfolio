import { motion } from "framer-motion";
import { Calendar, BookOpen, Award, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Electrical Engineering",
    school: "National Institute of Technology, Hamirpur",
    location: "Hamirpur, Himachal Pradesh",
    year: "2023 – 2027",
    gpa: "7.35 GPA",
    emoji: "🎓",
    color: "from-blue-500 to-teal-400",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    description:
      "Developing a solid engineering foundation through core subjects like electrical systems, programming, and data structures — while building real-world full-stack and cloud-native software projects alongside academics.",
    tags: ["MERN Stack", "AWS", "Docker", "DSA", "System Design"],
  },
  {
    degree: "Senior Secondary Certificate",
    branch: "Science (PCM)",
    school: "SVM Himrashmi, Vikasnagar",
    location: "Shimla, Himachal Pradesh",
    year: "2020 – 2022",
    gpa: "93%",
    emoji: "📘",
    color: "from-teal-400 to-emerald-400",
    borderColor: "border-teal-500/30",
    accentColor: "text-teal-400",
    bgAccent: "bg-teal-500/10",
    description:
      "Built a strong foundation in Physics, Chemistry, and Mathematics through hands-on laboratory work and problem-solving focused on scientific reasoning and analytical thinking.",
    tags: ["Physics", "Chemistry", "Mathematics", "Science"],
  },
];

export default function Education() {
  return (
    <section className="py-28 bg-[#020617] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-purple-400 bg-purple-400/10 border border-purple-400/20 px-4 py-1.5 rounded-full mb-5">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Where curiosity met curriculum and code took root.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-teal-500/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${edu.color} ring-4 ring-gray-950 shadow-lg`} />
                </div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-14 md:ml-0 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className={`bg-gray-900/70 border ${edu.borderColor} rounded-2xl p-7 hover:bg-gray-900/90 hover:border-opacity-60 transition-all duration-300 group`}>

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl mt-0.5">{edu.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                        <p className={`text-sm font-medium mt-0.5 ${edu.accentColor}`}>{edu.branch}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="space-y-1.5 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          {edu.year}
                        </span>
                        <span className={`flex items-center gap-1.5 font-semibold ${edu.accentColor}`}>
                          <Award className="w-3.5 h-3.5" />
                          {edu.gpa}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-gray-700 pl-3 mb-5 italic">
                      {edu.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${edu.bgAccent} ${edu.accentColor} border border-current/20`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year label on the other side (desktop only) */}
                <div className={`hidden md:flex w-[calc(50%-2rem)] items-start pt-7 ${i % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"}`}>
                  <span className="text-gray-500 text-sm font-mono">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
