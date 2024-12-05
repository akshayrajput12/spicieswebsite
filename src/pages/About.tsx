import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import { Award, Leaf, Heart, ShieldCheck, Truck, DollarSign, ArrowDown, Globe2, Star, Trophy, Users, Store } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setMousePosition({ x: x - 0.5, y: y - 0.5 });
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "100% Natural Ingredients",
      description: "Our spices are sourced directly from premium farming locations across India, ensuring pure and authentic flavors that have been cherished for generations."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Health-Focused",
      description: "Each blend is meticulously crafted to maximize both taste and health benefits, supporting your wellness journey with nature's finest ingredients."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Quality Assured",
      description: "Our state-of-the-art facilities and ISO certifications guarantee premium quality in every package, maintaining the highest standards in the industry."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Traditional Expertise",
      description: "With over 50 years of masala-making expertise, we preserve authentic Indian flavors while innovating for modern kitchens."
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "Wide Availability",
      description: "Present in over 80 countries, making authentic Indian spices accessible to food lovers worldwide through our extensive distribution network."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
      title: "Affordable Excellence",
      description: "Premium quality spices at competitive prices, because we believe everyone deserves access to authentic flavors without compromise."
    }
  ];

  const stats = [
    { value: "50+", label: "Years of Excellence" },
    { value: "100+", label: "Product Varieties" },
    { value: "80+", label: "Countries Served" },
    { value: "1M+", label: "Happy Customers" }
  ];

  const timeline = [
    {
      year: "1963",
      title: "Humble Beginnings",
      description: "Started as a small family-owned spice shop in Mumbai, India, with a vision to deliver authentic flavors.",
      icon: Store,
      color: "#D94E47"
    },
    {
      year: "1975",
      title: "First Factory",
      description: "Established our first state-of-the-art spice processing facility, implementing traditional methods with modern technology.",
      icon: Star,
      color: "#FF7E1F"
    },
    {
      year: "1988",
      title: "International Expansion",
      description: "Began exports to Middle East and Southeast Asia, bringing Indian flavors to global kitchens.",
      icon: Globe2,
      color: "#FFC107"
    },
    {
      year: "1995",
      title: "Quality Recognition",
      description: "Received ISO certification and multiple industry awards for quality and innovation.",
      icon: Trophy,
      color: "#D94E47"
    },
    {
      year: "2005",
      title: "Modern Innovation",
      description: "Launched ready-to-use spice blends and recipe mixes, making cooking easier for busy families.",
      icon: Heart,
      color: "#FF7E1F"
    },
    {
      year: "2023",
      title: "Global Leader",
      description: "Serving millions of customers across 80+ countries with 100+ premium spice products.",
      icon: Users,
      color: "#FFC107"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFF8E7] overflow-hidden">
      {/* Decorative Spice Pattern Background */}
      <div className="fixed inset-0 spice-pattern pointer-events-none" />

      {/* Hero Section */}
      <motion.div 
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Layers */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.7), 
                rgba(139, 69, 19, 0.8)
              ),
              url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Overlay Pattern */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/spice-pattern.png')`,
              backgroundSize: '200px',
              opacity: 0.1,
            }}
          />
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="relative z-20 text-center px-4 space-y-8 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Title Container */}
          <div className="relative inline-block mb-8">
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute -inset-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,193,7,0.2) 0%, rgba(217,78,71,0.2) 50%, rgba(255,126,31,0.2) 100%)',
                filter: 'blur(20px)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Main Title */}
            <h1 className="text-8xl font-playfair font-bold text-white mb-4 relative drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Our Spice 
              <span className="block text-spice-gradient">Journey</span>
            </h1>
          </div>

          {/* Subtitle with Enhanced Visibility */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-black/30 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <p className="relative text-2xl font-poppins text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Bringing the finest flavors from nature's bounty to your kitchen since 
              <span className="text-[#FFC107] font-bold"> 1963</span>
            </p>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Timeline Section */}
      <motion.section 
        className="py-20 relative bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-spice-gradient">
            Our Journey Through Time
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#D94E47] via-[#FF7E1F] to-[#FFC107]" />
            
            {/* Timeline Items */}
            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <motion.div
                      className="card-hover rounded-xl p-8"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h3 className="text-4xl font-playfair font-bold mb-2" style={{ color: item.color }}>
                        {item.year}
                      </h3>
                      <h4 className="text-2xl font-playfair font-bold text-[#8B4513] mb-3">
                        {item.title}
                      </h4>
                      <p className="text-[#8B4513]/80 font-poppins">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section with 3D Cards */}
      <motion.section 
        className="py-20 relative bg-[#FFF8E7]/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group perspective-3d"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-hover rounded-xl p-8">
                  <h3 className="text-5xl font-playfair font-bold text-spice-gradient mb-2">{stat.value}</h3>
                  <p className="text-[#8B4513] font-poppins font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Grid with Hover Effects */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-spice-gradient">
            Why Choose Everest Spices?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-hover rounded-xl p-8 perspective-3d"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                  <h3 className="text-2xl font-playfair font-bold ml-4 text-[#8B4513]">{feature.title}</h3>
                </motion.div>
                <p className="text-[#8B4513]/80 font-poppins leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quality Commitment with Parallax */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/spices-quality.jpg")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-playfair font-bold text-center mb-12 text-[#FFF8E7]">
              Our Quality Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="card-hover rounded-xl p-8"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-playfair font-bold mb-6 text-spice-gradient">Processing Excellence</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-[#8B4513]">
                    <Globe2 className="w-6 h-6 mr-3 text-[#D94E47]" />
                    <span className="font-poppins">Premium sourcing from select farms</span>
                  </li>
                  <li className="flex items-center text-[#8B4513]">
                    <Globe2 className="w-6 h-6 mr-3 text-[#FF7E1F]" />
                    <span className="font-poppins">Advanced cleaning technology</span>
                  </li>
                  <li className="flex items-center text-[#8B4513]">
                    <Globe2 className="w-6 h-6 mr-3 text-[#FFC107]" />
                    <span className="font-poppins">Traditional grinding methods</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="card-hover rounded-xl p-8"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-playfair font-bold mb-6 text-spice-gradient">Quality Standards</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-[#8B4513]">
                    <Globe2 className="w-6 h-6 mr-3 text-[#D94E47]" />
                    <span className="font-poppins">ISO 22000:2018 certified</span>
                  </li>
                  <li className="flex items-center text-[#8B4513]">
                    <Globe2 className="w-6 h-6 mr-3 text-[#FF7E1F]" />
                    <span className="font-poppins">HACCP compliance</span>
                  </li>
                  <li className="flex items-center text-[#8B4513]">
                    <Globe2 className="w-6 h-6 mr-3 text-[#FFC107]" />
                    <span className="font-poppins">Regular quality audits</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-spice-gradient origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />
    </div>
  );
};