import { motion } from 'framer-motion';
import { Package, Star, Shield, Truck } from 'lucide-react';

export const SpiceSubscriptionSection = () => {
  const subscriptionPlans = [
    {
      name: 'Starter Box',
      price: 29.99,
      description: 'Perfect for beginners exploring Indian spices',
      features: [
        '5 Essential Spices Monthly',
        '2 Recipe Cards',
        'Basic Storage Guide',
        'Monthly Newsletter'
      ],
      popular: false
    },
    {
      name: 'Chef\'s Collection',
      price: 49.99,
      description: 'Comprehensive spice selection for enthusiasts',
      features: [
        '8 Premium Spices Monthly',
        '5 Recipe Cards',
        'Premium Storage Box',
        'Video Tutorials Access',
        'Exclusive Community Access'
      ],
      popular: true
    },
    {
      name: 'Master\'s Box',
      price: 79.99,
      description: 'Ultimate spice experience for professionals',
      features: [
        '12 Luxury Spices Monthly',
        '10 Recipe Cards',
        'Professional Spice Box',
        'Live Workshop Access',
        '1-on-1 Chef Consultation',
        'Priority Customer Support'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Curated Selection',
      description: 'Hand-picked premium spices delivered to your doorstep monthly'
    },
    {
      icon: Star,
      title: 'Fresh & Authentic',
      description: 'Directly sourced from premium spice gardens for maximum flavor'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Rigorous quality checks and premium packaging standards'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Complimentary shipping on all subscription boxes'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-600 font-medium mb-4"
          >
            Monthly Spice Box
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Subscribe to Culinary Excellence
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the joy of discovering new spices and flavors every month with our carefully curated subscription boxes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-amber-500 shadow-xl' : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gray-800">
                  ${plan.price}
                </span>
                <span className="text-gray-600">/month</span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                    className="flex items-center gap-2"
                  >
                    <Star size={16} className="text-amber-500" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                }`}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={24} className="text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
