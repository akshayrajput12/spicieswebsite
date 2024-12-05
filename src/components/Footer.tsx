import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Youtube, href: '#' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Spice Blends', href: '/products' },
      { name: 'Pure Spices', href: '/products' },
      { name: 'Gift Sets', href: '/products' },
      { name: 'New Arrivals', href: '/products' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Recipes', href: '/recipes' },
      { name: 'Cooking Tips', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Store Locator', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <Link to="/" className="text-3xl font-playfair font-bold mb-4 block">
              Everest
            </Link>
            <p className="text-gray-400 mb-6">
              Bringing authentic flavors to your kitchen since 1967. Experience the finest quality spices sourced from around the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get recipes, cooking tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg font-semibold hover:from-red-700 hover:to-amber-700 transition-colors duration-300">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-12">
          © {new Date().getFullYear()} Everest Spices. All rights reserved.
        </div>
      </div>
    </footer>
  );
};