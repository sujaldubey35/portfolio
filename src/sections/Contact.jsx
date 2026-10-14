import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaGlobe, FaArrowRight } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-blue-400" size={20} />,
      label: "Direct Email",
      value: personal.email,
      href: personal.emailUrl,
      action: "Send Email",
      glow: "hover:border-blue-500/50",
    },
    {
      icon: <FaPhone className="text-emerald-400" size={20} />,
      label: "Phone / WhatsApp",
      value: personal.phone,
      href: personal.phoneUrl,
      action: "Call",
      glow: "hover:border-emerald-500/50",
    },
    {
      icon: <FaLinkedin className="text-indigo-400" size={20} />,
      label: "LinkedIn Profile",
      value: "rudra-dubey",
      href: personal.linkedin,
      action: "Connect",
      external: true,
      glow: "hover:border-indigo-500/50",
    },
    {
      icon: <FaGithub className="text-gray-200" size={20} />,
      label: "GitHub Profile",
      value: "sujaldubey35",
      href: personal.github,
      action: "Follow",
      external: true,
      glow: "hover:border-white/30",
    },
    {
      icon: <FaGlobe className="text-cyan-400" size={20} />,
      label: "Live Portfolio",
      value: "rudraportfolio-rouge.vercel.app",
      href: personal.portfolioUrl,
      action: "Visit",
      external: true,
      glow: "hover:border-cyan-500/50",
    },
    {
      icon: <FaMapMarkerAlt className="text-rose-400" size={20} />,
      label: "Location",
      value: personal.location,
      action: "Based in India",
      glow: "hover:border-rose-500/50",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white">
          Let's Build Something Exceptional
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
          Open to full-time engineering roles, DevOps contracts, and scalable web platform collaborations.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {contactMethods.map((method, index) => {
          const CardContent = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 ${method.glow} transition-all duration-300 flex items-center justify-between gap-4 group h-full hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition duration-300">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{method.label}</p>
                  <p className="text-sm font-semibold text-white mt-1 break-all">
                    {method.value}
                  </p>
                </div>
              </div>

              {method.href && (
                <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition shrink-0 flex items-center gap-1">
                  <span>{method.action}</span>
                  <FaArrowRight size={10} />
                </span>
              )}
            </motion.div>
          );

          if (method.href) {
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                {CardContent}
              </a>
            );
          }

          return <div key={method.label}>{CardContent}</div>;
        })}
      </div>
    </section>
  );
};

export default Contact;