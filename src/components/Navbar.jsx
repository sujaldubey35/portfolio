import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["home", "about", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">Rudra.dev</h1>

      {/* Desktop */}
      <ul className="hidden md:flex gap-6">
        {links.map(link => (
          <a key={link} href={`#${link}`} className="hover:text-blue-400 capitalize">
            {link}
          </a>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6">
          {links.map(link => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;