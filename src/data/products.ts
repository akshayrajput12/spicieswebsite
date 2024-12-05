export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  weight: string;
  features: string[];
  usage: string[];
  relatedRecipes: string[];
}

export const products: Product[] = [
  {
    id: 'garam-masala',
    name: 'Everest Garam Masala',
    description: 'A perfect blend of aromatic spices that adds authentic Indian flavor to your dishes.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?auto=format&fit=crop&q=80&w=800',
    category: 'Blended Spices',
    weight: '100g',
    features: [
      'Premium quality whole spices',
      'Perfectly balanced blend',
      'Rich aroma and authentic taste',
      'No artificial colors or preservatives'
    ],
    usage: [
      'Add to curries and gravies',
      'Sprinkle on grilled vegetables',
      'Use in marinades for meat dishes'
    ],
    relatedRecipes: ['Butter Chicken', 'Biryani', 'Dal Makhani']
  },
  {
    id: 'turmeric-powder',
    name: 'Everest Turmeric Powder',
    description: 'Pure and vibrant turmeric powder that adds color and health benefits to your cooking.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    category: 'Ground Spices',
    weight: '200g',
    features: [
      'High curcumin content',
      'Natural color and aroma',
      'Triple-purified powder',
      'Anti-inflammatory properties'
    ],
    usage: [
      'Essential in Indian curries',
      'Add to rice for color and flavor',
      'Use in golden milk recipe'
    ],
    relatedRecipes: ['Yellow Dal', 'Turmeric Rice', 'Golden Milk']
  },
  {
    id: 'chili-powder',
    name: 'Everest Red Chili Powder',
    description: 'Premium quality red chili powder that adds the perfect heat to your dishes.',
    image: 'https://images.unsplash.com/photo-1598380202229-9eb3aca6f8a3?auto=format&fit=crop&q=80&w=800',
    category: 'Ground Spices',
    weight: '100g',
    features: [
      'Made from selected red chilies',
      'Optimal heat level',
      'Rich color and flavor',
      'No additives'
    ],
    usage: [
      'Use in curries and marinades',
      'Add to stir-fries',
      'Spice up any dish'
    ],
    relatedRecipes: ['Spicy Chicken Curry', 'Chili Paneer', 'Hot and Sour Soup']
  },
  {
    id: 'coriander-powder',
    name: 'Everest Coriander Powder',
    description: 'Freshly ground coriander seeds with a delicate, citrusy aroma.',
    image: 'https://images.unsplash.com/photo-1599909533731-9d1927fdb9d3?auto=format&fit=crop&q=80&w=800',
    category: 'Ground Spices',
    weight: '100g',
    features: [
      'Freshly ground coriander seeds',
      'Aromatic and flavorful',
      'Essential Indian spice',
      'Pure and natural'
    ],
    usage: [
      'Base spice for curries',
      'Add to vegetable dishes',
      'Use in spice blends'
    ],
    relatedRecipes: ['Vegetable Korma', 'Coriander Chicken', 'Mixed Vegetable Curry']
  },
  {
    id: 'cumin-powder',
    name: 'Everest Cumin Powder',
    description: 'Aromatic ground cumin that adds warmth and earthiness to dishes.',
    image: 'https://images.unsplash.com/photo-1599909533144-f663ee65a326?auto=format&fit=crop&q=80&w=800',
    category: 'Ground Spices',
    weight: '100g',
    features: [
      'Premium quality cumin seeds',
      'Strong aroma',
      'Freshly ground',
      'No preservatives'
    ],
    usage: [
      'Essential in Indian cooking',
      'Use in spice rubs',
      'Add to rice dishes'
    ],
    relatedRecipes: ['Jeera Rice', 'Cumin Potatoes', 'Lentil Soup']
  },
  {
    id: 'biryani-masala',
    name: 'Everest Biryani Masala',
    description: 'Special blend of spices perfect for creating authentic biryani.',
    image: 'https://images.unsplash.com/photo-1596547609193-381e66c0e5b6?auto=format&fit=crop&q=80&w=800',
    category: 'Blended Spices',
    weight: '100g',
    features: [
      'Perfect blend for biryani',
      'Authentic taste',
      'Premium whole spices',
      'Traditional recipe'
    ],
    usage: [
      'Use in biryani preparation',
      'Add to rice dishes',
      'Use in marinades'
    ],
    relatedRecipes: ['Chicken Biryani', 'Vegetable Biryani', 'Lamb Biryani']
  },
  {
    id: 'tandoori-masala',
    name: 'Everest Tandoori Masala',
    description: 'Authentic blend for tandoori dishes with perfect balance of spices.',
    image: 'https://images.unsplash.com/photo-1599909533271-7fafe972f4d2?auto=format&fit=crop&q=80&w=800',
    category: 'Blended Spices',
    weight: '100g',
    features: [
      'Perfect for tandoori dishes',
      'Authentic taste',
      'Balanced heat level',
      'No artificial colors'
    ],
    usage: [
      'Marinate meat and vegetables',
      'Use in gravies',
      'Add to dips'
    ],
    relatedRecipes: ['Tandoori Chicken', 'Tandoori Cauliflower', 'Paneer Tikka']
  },
  {
    id: 'kashmiri-chili',
    name: 'Everest Kashmiri Chili Powder',
    description: 'Vibrant red chili powder known for its rich color and mild heat.',
    image: 'https://images.unsplash.com/photo-1599909533394-0f3b4c5c6ff1?auto=format&fit=crop&q=80&w=800',
    category: 'Ground Spices',
    weight: '100g',
    features: [
      'Bright red color',
      'Mild heat level',
      'Perfect for coloring dishes',
      'Pure Kashmiri chilies'
    ],
    usage: [
      'Add color to curries',
      'Use in marinades',
      'Perfect for tandoori dishes'
    ],
    relatedRecipes: ['Rogan Josh', 'Butter Chicken', 'Kashmiri Pulao']
  },
  {
    id: 'cardamom-powder',
    name: 'Everest Cardamom Powder',
    description: 'Aromatic green cardamom powder for sweet and savory dishes.',
    image: 'https://images.unsplash.com/photo-1599909533557-eba3f6a15488?auto=format&fit=crop&q=80&w=800',
    category: 'Ground Spices',
    weight: '50g',
    features: [
      'Intense aroma',
      'Premium green cardamom',
      'Freshly ground',
      'Pure and natural'
    ],
    usage: [
      'Add to desserts',
      'Use in masala chai',
      'Flavor rice dishes'
    ],
    relatedRecipes: ['Masala Chai', 'Kheer', 'Biryani']
  },
  {
    id: 'pav-bhaji-masala',
    name: 'Everest Pav Bhaji Masala',
    description: 'Special blend for the famous street food dish Pav Bhaji.',
    image: 'https://images.unsplash.com/photo-1599909533466-3f0e0f3f8c52?auto=format&fit=crop&q=80&w=800',
    category: 'Blended Spices',
    weight: '100g',
    features: [
      'Authentic street food taste',
      'Perfect blend of spices',
      'Rich aroma',
      'No artificial additives'
    ],
    usage: [
      'Make Pav Bhaji',
      'Add to vegetable dishes',
      'Use as a general seasoning'
    ],
    relatedRecipes: ['Pav Bhaji', 'Mixed Vegetable Curry', 'Spicy Potatoes']
  },
  {
    id: 'chai-masala',
    name: 'Everest Chai Masala',
    description: 'Perfect blend of spices for authentic Indian masala chai.',
    image: 'https://images.unsplash.com/photo-1599909533800-8f7df6d3e5c0?auto=format&fit=crop&q=80&w=800',
    category: 'Blended Spices',
    weight: '50g',
    features: [
      'Premium spice blend',
      'Perfect for tea',
      'Rich aroma',
      'Traditional recipe'
    ],
    usage: [
      'Add to tea',
      'Make masala chai',
      'Use in desserts'
    ],
    relatedRecipes: ['Masala Chai', 'Chai Spiced Cookies', 'Spiced Tea Cake']
  }
];
