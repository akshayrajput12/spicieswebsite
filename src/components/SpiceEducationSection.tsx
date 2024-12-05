import { motion } from 'framer-motion';
import { BookOpen, Leaf, ThermometerSun, Award } from 'lucide-react';

export const SpiceEducationSection = () => {
  const spiceGuides = [
    {
      title: 'Storage & Preservation',
      icon: ThermometerSun,
      description: 'Learn how to properly store your spices to maintain their flavor and aroma for longer periods.',
      tips: [
        'Store in airtight containers',
        'Keep away from direct sunlight',
        'Avoid moisture and heat',
        'Check freshness regularly'
      ]
    },
    {
      title: 'Health Benefits',
      icon: Leaf,
      description: 'Discover the numerous health benefits and therapeutic properties of different spices.',
      tips: [
        'Anti-inflammatory properties',
        'Digestive health support',
        'Immune system boost',
        'Natural antioxidants'
      ]
    },
    {
      title: 'Spice Blending',
      icon: Award,
      description: 'Master the art of combining spices to create your own signature blends and elevate your cooking.',
      tips: [
        'Balance of flavors',
        'Regional combinations',
        'Toasting techniques',
        'Proper measurements'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-600 mb-4"
          >
            <BookOpen size={18} />
            <span className="font-medium">Spice Academy</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Master the Art of Spices
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock the secrets of spices with our comprehensive guides and expert tips for selecting, storing, and using spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spiceGuides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <guide.icon size={24} className="text-amber-600" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {guide.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {guide.description}
              </p>

              <ul className="space-y-3">
                {guide.tips.map((tip, tipIndex) => (
                  <motion.li
                    key={tipIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (tipIndex * 0.1) }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span className="text-sm text-gray-600">{tip}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="mt-8 w-full py-3 px-4 bg-amber-50 text-amber-600 rounded-xl font-medium hover:bg-amber-100 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors">
            <BookOpen size={20} />
            Access Full Spice Guide
          </button>
        </motion.div>
      </div>
    </section>
  );
};
