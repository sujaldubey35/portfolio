import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-blue-400" size={20} />,
      label: "Email",
      value: personal.email,
      href: personal.emailUrl,
      action: "Send Email",
    },
    {
      icon: <FaPhone className="text-emerald-400" size={20} />,
      label: "Phone",
      value: personal.phone,
      href: personal.phoneUrl,
      action: "Call Now",
    },
    {
      icon: <FaMapMarkerAlt className="text-rose-400" size={20} />,
      label: "Location",
      value: personal.location,
      action: "Based in India",
    },
    {
      icon: <FaLinkedin className="text-indigo-400" size={20} />,
      label: "LinkedIn",
      value: "rudra-dubey",
      href: personal.linkedin,
      action: "Connect",
      external: true,
    },
    {
      icon: <FaGithub className="text-gray-300" size={20} />,
      label: "GitHub",
      value: "sujaldubey35",
      href: personal.github,
      action: "Follow",
      external: true,
    },
    {
      icon: <FaGlobe className="text-cyan-400" size={20} />,
      label: "Live Portfolio",
      value: "rudraportfolio-rouge.vercel.app",
      href: personal.portfolioUrl,
      action: "Visit",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Let's Talk
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
          Currently open to full-time roles, engineering collaborations, and DevOps opportunities. Feel free to connect directly!
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
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition flex items-center justify-between gap-4 group h-full"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{method.label}</p>
                  <p className="text-sm font-semibold text-white mt-0.5 break-all">
                    {method.value}
                  </p>
                </div>
              </div>

              {method.href && (
                <span className="text-[11px] font-semibold text-blue-400 group-hover:translate-x-1 transition shrink-0">
                  {method.action} →
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