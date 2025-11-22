
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Projects' },
    { id: 'experiences', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li key={item.id} className="nav-li">
          <a 
            className="nav-link" 
            href={`#${item.id}`} 
            onClick={(e) => handleLinkClick(e, item.id)}
          >
            {item.label}
          </a>
        </li>
      ))}
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
            className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer text-orange-500 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt={isOpen ? "Close menu" : "Open menu"}
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden sm:hidden bg-white border-t border-orange-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="py-4 px-4">
              <Navigation onNavClick={handleNavClick} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;