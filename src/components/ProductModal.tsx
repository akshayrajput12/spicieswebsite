import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Info, Utensils } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -50,
    transition: {
      duration: 0.3
    }
  }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      >
        <motion.div
          key="modal-content"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col lg:flex-row shadow-2xl"
        >
          {/* Product Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="relative h-64 lg:h-full group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <motion.h2
                className="absolute bottom-6 left-6 right-6 text-3xl font-bold text-white"
                variants={itemVariants}
              >
                {product.name}
              </motion.h2>
            </motion.div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors transform hover:scale-110 duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Product Details Section */}
          <motion.div
            variants={contentVariants}
            className="w-full lg:w-1/2 p-6 overflow-y-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {product.weight}
                </span>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-amber-600" size={20} />
                <h3 className="font-semibold text-lg">Key Features</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Usage */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Info className="text-amber-600" size={20} />
                <h3 className="font-semibold text-lg">How to Use</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {product.usage.map((use, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" />
                    <span className="text-gray-600">{use}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Related Recipes */}
            {product.relatedRecipes.length > 0 && (
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Utensils className="text-amber-600" size={20} />
                  <h3 className="font-semibold text-lg">Featured in Recipes</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.relatedRecipes.map((recipe, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="text-sm bg-amber-50 text-amber-700 px-3 py-2 rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {recipe}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};