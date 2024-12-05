import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const parallaxEffect = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        duration: 1,
        x: xPos,
        y: yPos,
        rotateX: yPos * 0.2,
        rotateY: xPos * 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', parallaxEffect);
    return () => window.removeEventListener('mousemove', parallaxEffect);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-red-600/20" />
      
      <motion.img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Spices"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Elevate Your Culinary Journey
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Discover the perfect blend of tradition and innovation with our premium spices
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <button className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Explore Products
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              View Recipes
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};