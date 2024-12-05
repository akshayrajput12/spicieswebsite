import { motion } from 'framer-motion';
import { ChefHat, Clock, Users, Search } from 'lucide-react';
import { useState } from 'react';

export const RecipeDiscoverySection = () => {
  const [activeCategory, setActiveCategory] = useState('Popular');

  const categories = ['Popular', 'Quick & Easy', 'Traditional', 'Seasonal'];
  
  const featuredRecipes = [
    {
      title: 'Butter Chicken',
      time: '45 mins',
      servings: '4',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      spices: ['Garam Masala', 'Tandoori Masala', 'Kashmiri Chili']
    },
    {
      title: 'Biryani',
      time: '60 mins',
      servings: '6',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      spices: ['Biryani Masala', 'Saffron', 'Garam Masala']
    },
    {
      title: 'Dal Tadka',
      time: '30 mins',
      servings: '4',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      spices: ['Turmeric', 'Cumin', 'Coriander']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Discover Culinary Magic
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of authentic recipes, each crafted to bring out the best of our premium spices.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-amber-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {recipe.title}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm">{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <ChefHat size={16} />
                    <span className="text-sm">{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Key Spices:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.spices.map((spice) => (
                      <span
                        key={spice}
                        className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm"
                      >
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors">
            <Search size={20} />
            Explore All Recipes
          </button>
        </div>
      </div>
    </section>
  );
};
