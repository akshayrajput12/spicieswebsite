import { motion } from 'framer-motion';
import { Product } from '../data/products';
import { useState, useRef } from 'react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
        transformStyle: 'preserve-3d'
      }}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          style={{
            transform: `translateZ(20px) scale(${1 - Math.abs(mousePosition.x) * 0.1 - Math.abs(mousePosition.y) * 0.1})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="p-4"
        style={{
          transform: 'translateZ(30px)',
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <motion.h3 
            className="font-semibold text-lg text-gray-800 group-hover:text-amber-600 transition-colors duration-300"
          >
            {product.name}
          </motion.h3>
          <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {product.relatedRecipes.slice(0, 2).map((recipe, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {recipe}
            </span>
          ))}
          {product.relatedRecipes.length > 2 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              +{product.relatedRecipes.length - 2} more
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};