import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, ChefHat, Timer, Utensils, AlertTriangle } from 'lucide-react';

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
}

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  if (!recipe) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header with Image */}
          <div className="relative h-64 md:h-72">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{recipe.name}</h2>
              <p className="text-sm md:text-base opacity-90">{recipe.description}</p>
            </div>
          </div>

          {/* Recipe Details */}
          <div className="flex-1 overflow-y-auto">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-amber-50">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs text-gray-600">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs text-gray-600">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs text-gray-600">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs text-gray-600">Difficulty</p>
                  <p className="font-medium">{recipe.difficulty}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Ingredients */}
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-600" />
                  Ingredients
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Instructions */}
              <section>
                <h3 className="text-lg font-semibold mb-3">Instructions</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Tips */}
              <section className="bg-amber-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Pro Tips
                </h3>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-600">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
