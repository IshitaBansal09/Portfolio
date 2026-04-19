import { useState, useEffect } from "react";
import {
  FaHome,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaLaptopCode,
  FaUser,
} from "react-icons/fa";

const navLinks = [
  { id: "home",      icon: FaHome,         text: "Home"      },
  { id: "about",     icon: FaUser,         text: "About"     },
  { id: "skills",    icon: FaCode,         text: "Skills"    },
  { id: "education", icon: FaGraduationCap,text: "Education" },
  { id: "projects",  icon: FaLaptopCode,   text: "Projects"  },
  { id: "contact",   icon: FaEnvelope,     text: "Contact"   },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offset = window.scrollY + 140;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset && el.offsetTop + el.offsetHeight > offset) {
          setActiveLink(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-0"}`}>
      <div className="md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto px-4 md:px-0">
        <div className="p-[1.5px] md:rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 bg-[length:200%_200%] animate-gradient-x">
          <nav className="bg-gray-950/95 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">

            {/* Mobile top bar */}
            <div className="flex justify-between items-center md:hidden">
              <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Ishita Bansal
              </span>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-0.5 pt-3 pb-1 md:py-0">
                {navLinks.map(({ id, icon: Icon, text }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`w-full md:w-auto px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-200 flex items-center gap-2 cursor-pointer text-left
                      ${activeLink === id
                        ? "bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-white border border-blue-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <Icon className={`text-xs flex-shrink-0 ${activeLink === id ? "text-blue-400" : ""}`} />
                    <span>{text}</span>
                  </button>
                ))}
              </div>
            </div>

          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
