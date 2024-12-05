export interface Recipe {
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
  recommendedProducts: {
    name: string;
    description: string;
  }[];
  category: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Butter Chicken Masala",
    category: "Main Course",
    description: "A rich and creamy North Indian curry made with tender chicken pieces in a tomato-based sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3",
    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "800g chicken thighs, cut into pieces",
      "2 tbsp butter",
      "2 onions, finely chopped",
      "4 tomatoes, pureed",
      "4 tbsp Everest Butter Chicken Masala",
      "1 cup heavy cream",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices for 2 hours",
      "Heat butter in a pan and sauté onions until golden",
      "Add tomato puree and cook until oil separates",
      "Add Everest Butter Chicken Masala and cook for 2 minutes",
      "Add chicken and cook until tender",
      "Finish with cream and garnish with coriander"
    ],
    tips: [
      "Use chicken thighs for more flavor",
      "Let the curry simmer on low heat for better taste",
      "Adjust cream quantity for desired richness"
    ],
    recommendedProducts: [
      {
        name: "Everest Butter Chicken Masala",
        description: "Perfect blend of spices for authentic butter chicken"
      }
    ]
  },
  {
    id: 2,
    name: "Hyderabadi Biryani",
    category: "Main Course",
    description: "Aromatic rice dish layered with spiced meat and fragrant herbs.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3",
    prepTime: "45 mins",
    cookTime: "1 hour",
    servings: "6",
    difficulty: "Hard",
    ingredients: [
      "3 cups basmati rice",
      "500g lamb or chicken",
      "3 tbsp Everest Biryani Masala",
      "2 onions, sliced",
      "Saffron strands",
      "Mint and coriander leaves",
      "Ghee",
      "Whole spices"
    ],
    instructions: [
      "Marinate meat with yogurt and Everest Biryani Masala",
      "Cook rice with whole spices until 70% done",
      "Layer rice and meat in a heavy-bottomed pot",
      "Add saffron milk and herbs",
      "Cook on dum for 30 minutes",
      "Let it rest for 10 minutes before serving"
    ],
    tips: [
      "Use long-grain basmati rice",
      "Don't skip the marination time",
      "Seal the pot with dough for authentic dum cooking"
    ],
    recommendedProducts: [
      {
        name: "Everest Biryani Masala",
        description: "Authentic blend for perfect Hyderabadi Biryani"
      }
    ]
  },
  {
    id: 3,
    name: "Chole Bhature",
    category: "Main Course",
    description: "Spicy chickpea curry served with fluffy deep-fried bread.",
    image: "https://images.unsplash.com/photo-1626500155537-82cca0ce4e88?ixlib=rb-4.0.3",
    prepTime: "8 hours",
    cookTime: "1 hour",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "3 tbsp Everest Chana Masala",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "For bhature: flour, yogurt, oil"
    ],
    instructions: [
      "Pressure cook chickpeas until tender",
      "Sauté onions and add Everest Chana Masala",
      "Add tomatoes and cook until oil separates",
      "Add chickpeas and simmer",
      "Make bhature dough and deep fry"
    ],
    tips: [
      "Soak chickpeas overnight",
      "Add tea bags while cooking for darker color",
      "Serve hot with onions and pickle"
    ],
    recommendedProducts: [
      {
        name: "Everest Chana Masala",
        description: "Perfect blend for authentic Punjabi chole"
      }
    ]
  },
  {
    id: 4,
    name: "Paneer Tikka Masala",
    category: "Main Course",
    description: "Grilled cottage cheese in spicy tomato-based gravy.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    prepTime: "30 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "500g paneer, cubed",
      "3 tbsp Everest Paneer Tikka Masala",
      "Bell peppers and onions",
      "Yogurt for marination",
      "Cream for gravy"
    ],
    instructions: [
      "Marinate paneer with spices and yogurt",
      "Grill paneer and vegetables",
      "Prepare gravy with tomatoes and spices",
      "Add grilled paneer to the gravy",
      "Finish with cream"
    ],
    tips: [
      "Don't overcook paneer",
      "Marinate for at least 2 hours",
      "Use thick yogurt for marination"
    ],
    recommendedProducts: [
      {
        name: "Everest Paneer Tikka Masala",
        description: "Perfect blend for restaurant-style paneer tikka"
      }
    ]
  },
  {
    id: 5,
    name: "Dal Makhani",
    category: "Main Course",
    description: "Creamy black lentils slow-cooked to perfection.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3",
    prepTime: "8 hours",
    cookTime: "4 hours",
    servings: "6",
    difficulty: "Medium",
    ingredients: [
      "2 cups black lentils",
      "1/2 cup red kidney beans",
      "2 tbsp Everest Dal Makhani Masala",
      "Butter and cream",
      "Onion, tomato paste"
    ],
    instructions: [
      "Soak lentils overnight",
      "Pressure cook with Everest Dal Makhani Masala",
      "Prepare tempering with spices",
      "Simmer with butter and cream",
      "Garnish with cream and coriander"
    ],
    tips: [
      "Slow cooking develops better flavor",
      "Mash some lentils for creaminess",
      "Add cream at the end"
    ],
    recommendedProducts: [
      {
        name: "Everest Dal Makhani Masala",
        description: "Perfect blend for restaurant-style dal makhani"
      }
    ]
  },
  {
    id: 6,
    name: "Malai Kofta",
    category: "Main Course",
    description: "Deep-fried paneer balls in rich creamy gravy.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3",
    prepTime: "45 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Hard",
    ingredients: [
      "For kofta: paneer, potatoes, spices",
      "3 tbsp Everest Kitchen King Masala",
      "Cashews and cream for gravy",
      "Onion, tomato paste"
    ],
    instructions: [
      "Make kofta mixture and shape into balls",
      "Deep fry koftas until golden",
      "Prepare gravy with cashew paste",
      "Add Everest Kitchen King Masala",
      "Add koftas just before serving"
    ],
    tips: [
      "Keep koftas separate until serving",
      "Make cashew paste smooth",
      "Don't overcook the koftas"
    ],
    recommendedProducts: [
      {
        name: "Everest Kitchen King Masala",
        description: "Perfect blend for rich gravies"
      }
    ]
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    category: "Appetizer",
    description: "Spicy and tangy grilled chicken with a smoky flavor.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3",
    prepTime: "4 hours",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1kg chicken, with skin",
      "3 tbsp Everest Tandoori Chicken Masala",
      "Yogurt for marination",
      "Lemon juice, ginger-garlic paste"
    ],
    instructions: [
      "Make marinade with yogurt and spices",
      "Marinate chicken for 4 hours",
      "Grill in tandoor or oven",
      "Baste with butter while cooking",
      "Serve with mint chutney"
    ],
    tips: [
      "Make cuts in chicken pieces",
      "Use thick yogurt for marination",
      "Don't skip the resting time"
    ],
    recommendedProducts: [
      {
        name: "Everest Tandoori Chicken Masala",
        description: "Perfect blend for authentic tandoori flavor"
      }
    ]
  },
  {
    id: 8,
    name: "Rajma Masala",
    category: "Main Course",
    description: "Kidney beans curry in thick tomato gravy.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3",
    prepTime: "8 hours",
    cookTime: "1 hour",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "2 cups kidney beans",
      "2 tbsp Everest Kitchen King Masala",
      "Onions, tomatoes",
      "Ginger-garlic paste"
    ],
    instructions: [
      "Soak rajma overnight",
      "Pressure cook until soft",
      "Prepare onion-tomato masala",
      "Add spices and simmer",
      "Garnish with cream"
    ],
    tips: [
      "Use fresh kidney beans",
      "Pressure cook properly",
      "Mash some beans for thickness"
    ],
    recommendedProducts: [
      {
        name: "Everest Kitchen King Masala",
        description: "Perfect blend for rich rajma curry"
      }
    ]
  },
  {
    id: 9,
    name: "Palak Paneer",
    category: "Main Course",
    description: "Cottage cheese cubes in creamy spinach gravy.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "500g spinach",
      "250g paneer",
      "2 tbsp Everest Garam Masala",
      "Onion, garlic paste",
      "Cream"
    ],
    instructions: [
      "Blanch and puree spinach",
      "Prepare tempering",
      "Add spinach puree",
      "Add paneer cubes",
      "Finish with cream"
    ],
    tips: [
      "Don't overcook spinach",
      "Pan-fry paneer before adding",
      "Add cream at the end"
    ],
    recommendedProducts: [
      {
        name: "Everest Garam Masala",
        description: "Perfect blend for vegetarian dishes"
      }
    ]
  },
  {
    id: 10,
    name: "Chicken Biryani",
    category: "Main Course",
    description: "Fragrant rice dish with spiced chicken and aromatics.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3",
    prepTime: "1 hour",
    cookTime: "45 mins",
    servings: "6",
    difficulty: "Hard",
    ingredients: [
      "1kg chicken",
      "3 cups basmati rice",
      "4 tbsp Everest Biryani Masala",
      "Onions, yogurt",
      "Whole spices"
    ],
    instructions: [
      "Marinate chicken",
      "Prepare rice",
      "Layer chicken and rice",
      "Cook on dum",
      "Rest before serving"
    ],
    tips: [
      "Use long grain rice",
      "Fry onions until brown",
      "Seal pot with dough"
    ],
    recommendedProducts: [
      {
        name: "Everest Biryani Masala",
        description: "Perfect blend for authentic biryani"
      }
    ]
  },
  {
    id: 11,
    name: "Masala Dosa",
    category: "Breakfast",
    description: "Crispy rice and lentil crepe filled with spiced potato filling.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3",
    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "Dosa batter",
      "Potatoes for filling",
      "2 tbsp Everest Sambhar Masala",
      "Onions and green chilies",
      "Curry leaves"
    ],
    instructions: [
      "Prepare dosa batter",
      "Make potato filling with spices",
      "Spread batter on hot griddle",
      "Add filling and fold",
      "Serve with sambhar and chutney"
    ],
    tips: [
      "Ferment batter properly",
      "Use cast iron griddle",
      "Keep griddle at right temperature"
    ],
    recommendedProducts: [
      {
        name: "Everest Sambhar Masala",
        description: "Perfect blend for authentic South Indian taste"
      }
    ]
  },
  {
    id: 12,
    name: "Pav Bhaji",
    category: "Street Food",
    description: "Spiced vegetable mash served with buttered bread rolls.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3",
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "Mixed vegetables",
      "3 tbsp Everest Pav Bhaji Masala",
      "Butter",
      "Pav bread",
      "Onions and tomatoes"
    ],
    instructions: [
      "Boil and mash vegetables",
      "Prepare masala base",
      "Mix vegetables with masala",
      "Toast pav with butter",
      "Serve hot with garnishes"
    ],
    tips: [
      "Use lots of butter",
      "Mash vegetables well",
      "Toast pav until crispy"
    ],
    recommendedProducts: [
      {
        name: "Everest Pav Bhaji Masala",
        description: "Authentic Mumbai street food flavor"
      }
    ]
  },
  {
    id: 13,
    name: "Fish Curry",
    category: "Main Course",
    description: "Coastal style fish curry with coconut base.",
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "500g fish pieces",
      "2 tbsp Everest Fish Curry Masala",
      "Coconut milk",
      "Curry leaves",
      "Tamarind"
    ],
    instructions: [
      "Clean and marinate fish",
      "Prepare coconut base",
      "Add spices and tamarind",
      "Cook fish gently",
      "Finish with curry leaves"
    ],
    tips: [
      "Don't overcook fish",
      "Use fresh curry leaves",
      "Balance spices and tamarind"
    ],
    recommendedProducts: [
      {
        name: "Everest Fish Curry Masala",
        description: "Perfect blend for coastal style curries"
      }
    ]
  },
  {
    id: 14,
    name: "Samosa",
    category: "Snacks",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    prepTime: "45 mins",
    cookTime: "30 mins",
    servings: "6",
    difficulty: "Hard",
    ingredients: [
      "For pastry: flour, oil",
      "Potatoes and peas",
      "2 tbsp Everest Chaat Masala",
      "Cumin seeds",
      "Green chilies"
    ],
    instructions: [
      "Prepare pastry dough",
      "Make potato filling",
      "Shape samosas",
      "Deep fry until golden",
      "Serve with chutneys"
    ],
    tips: [
      "Keep dough firm",
      "Seal edges well",
      "Fry at right temperature"
    ],
    recommendedProducts: [
      {
        name: "Everest Chaat Masala",
        description: "Adds tangy spice to snacks"
      }
    ]
  },
  {
    id: 15,
    name: "Matar Paneer",
    category: "Main Course",
    description: "Cottage cheese and peas in tomato gravy.",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "250g paneer",
      "1 cup peas",
      "3 tbsp Everest Kitchen King Masala",
      "Onion-tomato gravy",
      "Cream"
    ],
    instructions: [
      "Prepare gravy base",
      "Add peas and spices",
      "Add paneer cubes",
      "Simmer gently",
      "Finish with cream"
    ],
    tips: [
      "Use fresh peas",
      "Don't overcook paneer",
      "Balance gravy consistency"
    ],
    recommendedProducts: [
      {
        name: "Everest Kitchen King Masala",
        description: "Perfect for vegetarian gravies"
      }
    ]
  },
  {
    id: 16,
    name: "Chicken 65",
    category: "Appetizer",
    description: "Spicy deep-fried chicken with South Indian flavors.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3",
    prepTime: "4 hours",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "500g boneless chicken",
      "2 tbsp Everest Chicken 65 Masala",
      "Yogurt",
      "Curry leaves",
      "Red chilies"
    ],
    instructions: [
      "Marinate chicken",
      "Prepare coating",
      "Deep fry until crispy",
      "Temper with curry leaves",
      "Serve hot"
    ],
    tips: [
      "Double fry for extra crispiness",
      "Don't skip marination",
      "Use fresh curry leaves"
    ],
    recommendedProducts: [
      {
        name: "Everest Chicken 65 Masala",
        description: "Authentic South Indian flavor"
      }
    ]
  },
  {
    id: 17,
    name: "Veg Pulao",
    category: "Main Course",
    description: "Fragrant rice with mixed vegetables and aromatic spices.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa2c685?ixlib=rb-4.0.3",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "2 cups basmati rice",
      "Mixed vegetables",
      "2 tbsp Everest Pulao Masala",
      "Whole spices",
      "Ghee"
    ],
    instructions: [
      "Soak rice",
      "Sauté vegetables",
      "Add rice and spices",
      "Cook until done",
      "Fluff and serve"
    ],
    tips: [
      "Use long grain rice",
      "Don't overcook vegetables",
      "Let it rest before serving"
    ],
    recommendedProducts: [
      {
        name: "Everest Pulao Masala",
        description: "Perfect blend for aromatic rice dishes"
      }
    ]
  },
  {
    id: 18,
    name: "Masala Chai",
    category: "Beverages",
    description: "Indian spiced tea with milk.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: "2",
    difficulty: "Easy",
    ingredients: [
      "Tea leaves",
      "1 tsp Everest Tea Masala",
      "Milk",
      "Sugar",
      "Water"
    ],
    instructions: [
      "Boil water with tea masala",
      "Add tea leaves",
      "Add milk and simmer",
      "Strain and serve",
      "Add sugar to taste"
    ],
    tips: [
      "Use full-fat milk",
      "Don't overboil",
      "Adjust sugar to taste"
    ],
    recommendedProducts: [
      {
        name: "Everest Tea Masala",
        description: "Perfect blend for authentic masala chai"
      }
    ]
  },
  {
    id: 19,
    name: "Vegetable Korma",
    category: "Main Course",
    description: "Mixed vegetables in rich cashew and cream sauce.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3",
    prepTime: "30 mins",
    cookTime: "40 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "Mixed vegetables",
      "2 tbsp Everest Kitchen King Masala",
      "Cashew paste",
      "Cream",
      "Whole spices"
    ],
    instructions: [
      "Prepare cashew paste",
      "Cook vegetables",
      "Make korma sauce",
      "Combine and simmer",
      "Finish with cream"
    ],
    tips: [
      "Make smooth cashew paste",
      "Cook vegetables al dente",
      "Don't skip the cream"
    ],
    recommendedProducts: [
      {
        name: "Everest Kitchen King Masala",
        description: "Perfect for rich gravies"
      }
    ]
  },
  {
    id: 20,
    name: "Masala Dahi Vada",
    category: "Snacks",
    description: "Lentil dumplings soaked in spiced yogurt.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "Urad dal",
      "1 tbsp Everest Chaat Masala",
      "Green chilies",
      "Yogurt",
      "Mint chutney"
    ],
    instructions: [
      "Grind dal batter",
      "Deep fry vadas",
      "Soak in water",
      "Prepare spiced yogurt",
      "Assemble and garnish"
    ],
    tips: [
      "Make fluffy batter",
      "Don't over-soak vadas",
      "Chill yogurt well"
    ],
    recommendedProducts: [
      {
        name: "Everest Chaat Masala",
        description: "Perfect for chaat dishes"
      }
    ]
  }
];
