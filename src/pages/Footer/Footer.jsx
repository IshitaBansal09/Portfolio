import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const socials = [
  { label: "GitHub",   href: "https://github.com/IshitaBansal09",                         icon: FaGithub  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bansalishita59",      icon: FaLinkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/__IshitaBansal__/",                    icon: FaCode    },
];

const navLinks = [
  { label: "Home",      id: "home"      },
  { label: "About",     id: "about"     },
  { label: "Skills",    id: "skills"    },
  { label: "Education", id: "education" },
  { label: "Projects",  id: "projects"  },
  { label: "Contact",   id: "contact"   },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Ishita Bansal
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer building AI-powered web apps and cloud-native systems. Currently studying at NIT Hamirpur.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-5">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:bansalishita59@gmail.com" className="block hover:text-white transition-colors">
                bansalishita59@gmail.com
              </a>
              <p>Hamirpur, Himachal Pradesh</p>
              <p>NIT Hamirpur · B.Tech EE · 2023–2027</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Ishita Bansal. Built with React + Tailwind CSS.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors group"
          >
            Back to top
            <span className="w-6 h-6 rounded-md bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <HiArrowUp className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
