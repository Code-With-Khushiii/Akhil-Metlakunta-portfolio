import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavClick }) {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    console.log(`Navigating to ${sectionId}`);
    
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    
    if (element) {
      console.log('Scrolling to element...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
    
    if (onNavClick) {
      onNavClick();
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work" onClick={(e) => handleLinkClick(e, 'work')}>
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#certifications" onClick={(e) => handleLinkClick(e, 'certifications')}>
          Certifications
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-white/90 border-b border-orange-100">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm bg-orange-100 flex items-center justify-center relative">
              {!imageError ? (
                <img
                  src="assets/Akhil.jpeg"
                  alt="Akhil Metlakunta"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-orange-600 font-semibold text-sm">AM</span>
              )}
            </div>
            <a
              href="/"
              className="text-xl font-semibold transition-colors text-slate-900 hover:text-orange-500"
            >
              Akhil Metlakunta
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-orange-500 hover:text-orange-600 focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-white border-t border-orange-100"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavClick={handleNavClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
