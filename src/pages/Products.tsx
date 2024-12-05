import { PageTransition } from '../components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/products';
import { ProductModal } from '../components/ProductModal';

const categories = Array.from(new Set(products.map(product => product.category)));

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.relatedRecipes.some(recipe => recipe.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
        <motion.div
          style={{ y }}
          className="relative pt-24 pb-12 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Premium Spice Collection
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our range of high-quality spices and blends that bring authentic flavors to your kitchen.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products or recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-amber-600" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="py-2 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="All">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={resetFilters}
                  className="py-2 px-4 text-sm text-amber-600 hover:text-amber-700 focus:outline-none"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective"
                >
                  <motion.div
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu preserve-3d"
                    whileHover={{ rotateY: 5, z: 50 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-white bg-amber-500/80 px-2 py-1 rounded-full">
                            {product.weight}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {product.relatedRecipes.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs text-amber-600 font-medium mb-2">Featured in Recipes:</p>
                          <div className="flex flex-wrap gap-2">
                            {product.relatedRecipes.slice(0, 3).map((recipe, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                              >
                                {recipe}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </PageTransition>
  );
};