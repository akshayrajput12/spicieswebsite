import { motion } from 'framer-motion';
import { Leaf, Heart, Brain, Shield, Flame, Award, Sparkles, Target } from 'lucide-react';

export const SpiceBenefitsSection = () => {
  const spiceCategories = [
    {
      title: "Traditional Masalas",
      description: "Authentic blends passed down through generations",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      benefits: [
        "Perfect balance of flavors",
        "100% natural ingredients",
        "No artificial preservatives",
        "Premium quality spices"
      ]
    },
    {
      title: "Regional Specialties",
      description: "Unique blends from different Indian regions",
      image: "https://images.unsplash.com/photo-1505253304499-671c55fb57fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      benefits: [
        "Authentic regional taste",
        "Traditional recipes",
        "Carefully sourced ingredients",
        "Rich cultural heritage"
      ]
    }
  ];

  const spiceBenefits = [
    {
      icon: Heart,
      title: "Heart Health",
      description: "Our spices contain natural compounds that support cardiovascular health and circulation.",
      spices: ["Turmeric", "Cardamom", "Garlic"]
    },
    {
      icon: Brain,
      title: "Cognitive Function",
      description: "Essential oils in our spices help enhance memory and mental clarity.",
      spices: ["Black Pepper", "Cinnamon", "Sage"]
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Powerful antioxidants that strengthen your body's natural defenses.",
      spices: ["Ginger", "Turmeric", "Holy Basil"]
    },
    {
      icon: Flame,
      title: "Metabolism Boost",
      description: "Thermogenic properties that support healthy metabolism and digestion.",
      spices: ["Cayenne", "Black Pepper", "Cinnamon"]
    }
  ];

  const qualityFeatures = [
    {
      icon: Target,
      title: "Source Selection",
      description: "Carefully selected from premium spice farms across India"
    },
    {
      icon: Award,
      title: "Quality Testing",
      description: "Rigorous quality control and purity testing"
    },
    {
      icon: Sparkles,
      title: "Fresh Processing",
      description: "Ground fresh in small batches to preserve flavor"
    },
    {
      icon: Leaf,
      title: "Natural Purity",
      description: "100% pure spices with no additives or preservatives"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            The Everest Spices Difference
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of tradition, quality, and health benefits with our premium spice collection.
          </p>
        </div>

        {/* Spice Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {spiceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/80">{category.description}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="grid grid-cols-2 gap-4">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.2) + (benefitIndex * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Health Benefits */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center mb-12 text-gray-800"
          >
            Health Benefits of Our Spices
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spiceBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-amber-600" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                <div className="flex flex-wrap gap-2">
                  {benefit.spices.map((spice, spiceIndex) => (
                    <span
                      key={spiceIndex}
                      className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded-full"
                    >
                      {spice}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Features */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center mb-12 text-gray-800"
          >
            Our Quality Commitment
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
