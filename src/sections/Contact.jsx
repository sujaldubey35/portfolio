import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

      <p className="text-gray-400 mb-10">
        Feel free to reach out for opportunities or collaborations 🚀
      </p>

      {/* Contact Info Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6">

        {/* Phone */}
        <a
          href="tel:+919557072325"
          className="flex items-center gap-4 p-5 bg-white/10 rounded-xl hover:bg-white/20 transition hover:scale-105"
        >
          <FaPhone className="text-blue-400" size={22} />
          <span>+91 9557072325</span>
        </a>

        {/* Email */}
        <a
          href="mailto:sujaldubey35@gmail.com"
          className="flex items-center gap-4 p-5 bg-white/10 rounded-xl hover:bg-white/20 transition hover:scale-105"
        >
          <FaEnvelope className="text-blue-400" size={22} />
          <span>sujaldubey35@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rudra-dubey-477b68280/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-5 bg-white/10 rounded-xl hover:bg-white/20 transition hover:scale-105"
        >
          <FaLinkedin className="text-blue-400" size={22} />
          <span>LinkedIn Profile</span>
        </a>

      </div>
    </section>
  );
};

export default Contact;