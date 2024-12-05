import { PageTransition } from '../components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { RecipeModal } from '../components/RecipeModal';
import { Clock, Users, ChefHat, Search, Filter } from 'lucide-react';
import { recipes } from '../data/recipes';

const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
const difficulties = Array.from(new Set(recipes.map(recipe => recipe.difficulty)));
const RECIPES_PER_PAGE = 9;

export const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [visibleRecipes, setVisibleRecipes] = useState(RECIPES_PER_PAGE);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleLoadMore = () => {
    setVisibleRecipes(prev => Math.min(prev + RECIPES_PER_PAGE, filteredRecipes.length));
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setVisibleRecipes(RECIPES_PER_PAGE);
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
                Spice Up Your Kitchen
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our collection of authentic recipes featuring our premium spice blends.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search recipes..."
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

                <div className="flex items-center gap-2">
                  <ChefHat size={20} className="text-amber-600" />
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="py-2 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="All">All Difficulties</option>
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
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

            {/* Recipe Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.slice(0, visibleRecipes).map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {recipe.name}
                    </h3>
                  </div>

                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                        {recipe.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {recipe.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.cookTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ChefHat className="w-4 h-4" />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>

                    {recipe.recommendedProducts && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-amber-600 font-medium">Recommended Products:</p>
                        {recipe.recommendedProducts.map((product, idx) => (
                          <div key={idx} className="mt-2">
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleRecipes < filteredRecipes.length && (
              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLoadMore}
                  className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-8 py-3 rounded-full font-medium hover:from-amber-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Load More Recipes
                </motion.button>
              </div>
            )}

            {filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No recipes found matching your criteria.</p>
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

        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </div>
    </PageTransition>
  );
};