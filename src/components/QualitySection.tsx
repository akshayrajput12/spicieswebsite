import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Leaf, Shield, ThumbsUp } from 'lucide-react';

const qualities = [
  {
    icon: Leaf,
    title: 'Natural & Pure',
    description: 'Sourced directly from the finest farms, ensuring purity in every grain'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control for consistent excellence'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized globally for our commitment to quality'
  },
  {
    icon: ThumbsUp,
    title: 'Customer Choice',
    description: 'Trusted by millions of households worldwide'
  }
];

export const QualitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering the highest quality spices through our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <quality.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{quality.title}</h3>
              <p className="text-gray-600">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};