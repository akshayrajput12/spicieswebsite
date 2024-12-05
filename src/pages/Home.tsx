import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { QualitySection } from '../components/QualitySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SpiceBenefitsSection } from '../components/SpiceBenefitsSection';
import { SpiceEducationSection } from '../components/SpiceEducationSection';
import { RecipeDiscoverySection } from '../components/RecipeDiscoverySection';
import { CulinaryCommunitySection } from '../components/CulinaryCommunitySection';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Home = () => {
  return (
    <div className="relative">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
      >
        <ChevronDown
          size={32}
          className="animate-bounce"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        />
      </motion.div>

      <SpiceBenefitsSection />
      <FeaturedProducts />
      <SpiceEducationSection />
      <QualitySection />
      <RecipeDiscoverySection />
      <CulinaryCommunitySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};