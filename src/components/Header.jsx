import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { type: 'tween' } },
  };

  const navLinks = [
    { href: '#about', text: 'Sobre' },
    { href: '#services', text: 'Serviços' },
    { href: '#contact', text: 'Contato' },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753903623599_0.png"
              alt="NTC Brasil"
              className="h-12"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-gray-800 hover:text-primary'
                }`}
              >
                {link.text}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-gray-800 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
