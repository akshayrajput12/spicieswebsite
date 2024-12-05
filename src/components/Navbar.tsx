import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    }
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 50
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div 
      className="flex items-center justify-center w-12 h-12 cursor-pointer relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-10 h-10"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Circular background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-red-500"
          variants={{
            closed: { scale: 0.8, opacity: 0.8 },
            open: { scale: 1, opacity: 1 }
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Spice leaf design that transforms to X */}
        <motion.div className="absolute inset-0">
          {/* Left leaf/line */}
          <motion.div
            className="absolute w-1.5 h-6 bg-white rounded-full left-[45%] top-[20%]"
            variants={{
              closed: { 
                rotate: -30,
                y: 0,
                x: 0,
                height: 24
              },
              open: { 
                rotate: 45,
                y: 2,
                x: 2,
                height: 20
              }
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Right leaf/line */}
          <motion.div
            className="absolute w-1.5 h-6 bg-white rounded-full right-[45%] top-[20%]"
            variants={{
              closed: { 
                rotate: 30,
                y: 0,
                x: 0,
                height: 24
              },
              open: { 
                rotate: -45,
                y: 2,
                x: -2,
                height: 20
              }
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Center stem */}
          <motion.div
            className="absolute w-1.5 h-5 bg-white rounded-full left-1/2 top-[40%] -translate-x-1/2"
            variants={{
              closed: { 
                scaleY: 1,
                opacity: 1
              },
              open: { 
                scaleY: 0,
                opacity: 0
              }
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg backdrop-blur-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative group z-50"
        >
          <span className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-spice-gradient'
          }`}>
            Everest
          </span>
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
            isOpen ? 'bg-white' : 'bg-spice-gradient'
          }`}></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? 'text-amber-600' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className={`absolute inset-0 rounded-full bg-amber-50 z-0 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  } group-hover:opacity-100 transition-opacity duration-300`}
                  layoutId="navbar-indicator"
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <MenuIcon isOpen={isOpen} />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 bg-gradient-to-br from-amber-600 to-red-600 z-40"
            >
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="h-full flex flex-col items-center justify-center"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={linkVariants}
                    className="mb-8"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="relative group"
                    >
                      <motion.span 
                        className="text-4xl font-medium text-white block py-2"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};