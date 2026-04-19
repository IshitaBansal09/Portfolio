import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/IshitaBansal09",
    icon: FaGithub,
    color: "hover:text-white hover:border-gray-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bansalishita59",
    icon: FaLinkedin,
    color: "hover:text-blue-400 hover:border-blue-500/50",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/__IshitaBansal__/",
    icon: FaCode,
    color: "hover:text-orange-400 hover:border-orange-500/50",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const form = new FormData();
      form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703");
      form.append("name",    formData.name);
      form.append("email",   formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const result = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(result.message || "error");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const field = "w-full px-4 py-3 rounded-xl bg-gray-800/60 border text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors text-sm";
  const fieldOk = `${field} border-gray-700 focus:border-blue-500 focus:ring-blue-500/20`;
  const fieldErr = `${field} border-red-500/60 focus:border-red-500 focus:ring-red-500/20`;

  return (
    <section className="py-28 bg-[#0a0f1e] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-teal-400 bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full mb-5">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's{" "}
            <span className="gradient-text">connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:bansalishita59@gmail.com" className="text-gray-200 hover:text-white transition-colors text-sm">
                    bansalishita59@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-gray-200 text-sm">Hamirpur, Himachal Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-400 text-sm font-medium transition-all duration-200 ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "I'm currently open to internships and full-time opportunities. If you're working on something interesting, I'd love to hear about it."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-xs font-bold text-white">IB</div>
                <div>
                  <p className="text-white text-sm font-medium">Ishita Bansal</p>
                  <p className="text-gray-500 text-xs">B.Tech · NIT Hamirpur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={errors.name ? fieldErr : fieldOk}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={errors.email ? fieldErr : fieldOk}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={errors.subject ? fieldErr : fieldOk}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className={`resize-none ${errors.message ? fieldErr : fieldOk}`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : <Send className="w-4 h-4" />}
                {sending ? "Sending…" : "Send Message"}
              </button>

              {status && (
                <p className={`text-center text-sm ${status === "success" ? "text-teal-400" : "text-red-400"}`}>
                  {status === "success" ? "Message sent successfully! I'll get back to you soon." : status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
