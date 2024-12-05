import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/products';
import { ProductModal } from '../components/ProductModal';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const categories = Array.from(new Set(products.map(product => product.category)));

export const Products = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

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

  // If productId is provided, show single product view
  if (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
      return (
        <Layout>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-semibold text-orange-500">{product.price}</p>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  // Show products grid
  return (
    <PageTransition>
      <Layout>
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Our Products
          </h1>
          
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  id={product.id}
                  image={product.image}
                  onClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </motion.div>

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
      </Layout>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </PageTransition>
  );
};