export interface WellnessRecipe {
  id: string;
  name: string;
  category: 'cold' | 'pain' | 'sleep' | 'digestion' | 'immunity' | 'energy' | 'stress';
  ingredients: Ingredient[];
  instructions: string[];
  benefits: string[];
  prepTime: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export const WELLNESS_RECIPES: WellnessRecipe[] = [
  {
    id: 'ginger_tea_cold',
    name: 'Ginger & Honey Tea for Colds',
    category: 'cold',
    ingredients: [
      { name: 'Fresh ginger root', amount: '1', unit: 'inch piece' },
      { name: 'Honey', amount: '1', unit: 'tablespoon' },
      { name: 'Lemon juice', amount: '1', unit: 'tablespoon' },
      { name: 'Hot water', amount: '1', unit: 'cup' }
    ],
    instructions: [
      'Slice fresh ginger root into thin pieces',
      'Pour hot water over ginger and let steep for 5-10 minutes',
      'Strain the ginger pieces',
      'Add honey and lemon juice to taste',
      'Drink while warm'
    ],
    benefits: [
      'Boosts immune system',
      'Reduces inflammation',
      'Soothes sore throat',
      'Aids digestion'
    ],
    prepTime: 10,
    difficulty: 'easy',
    icon: '🍵'
  },
  {
    id: 'turmeric_milk_pain',
    name: 'Golden Milk (Turmeric Latte)',
    category: 'pain',
    ingredients: [
      { name: 'Turmeric powder', amount: '1', unit: 'teaspoon' },
      { name: 'Milk (dairy or plant-based)', amount: '1', unit: 'cup' },
      { name: 'Honey', amount: '1', unit: 'teaspoon' },
      { name: 'Black pepper', amount: 'pinch', unit: '' },
      { name: 'Cinnamon', amount: '1', unit: 'pinch' }
    ],
    instructions: [
      'Heat milk gently in a saucepan',
      'Add turmeric powder and stir well',
      'Add black pepper (enhances turmeric absorption)',
      'Add cinnamon for flavor',
      'Simmer for 2-3 minutes',
      'Sweeten with honey and serve warm'
    ],
    benefits: [
      'Reduces inflammation and joint pain',
      'Anti-inflammatory properties',
      'Supports overall wellness',
      'Promotes better sleep'
    ],
    prepTime: 10,
    difficulty: 'easy',
    icon: '🥛'
  },
  {
    id: 'chamomile_sleep',
    name: 'Chamomile Sleep Tea',
    category: 'sleep',
    ingredients: [
      { name: 'Dried chamomile flowers', amount: '1-2', unit: 'teaspoons' },
      { name: 'Hot water', amount: '1', unit: 'cup' },
      { name: 'Honey', amount: '1', unit: 'teaspoon' },
      { name: 'Lavender (optional)', amount: '1', unit: 'pinch' }
    ],
    instructions: [
      'Place dried chamomile flowers in a cup',
      'Pour hot water over flowers',
      'Cover and steep for 5-10 minutes',
      'Strain the flowers',
      'Add honey and optional lavender',
      'Drink 30 minutes before bedtime'
    ],
    benefits: [
      'Promotes relaxation',
      'Improves sleep quality',
      'Reduces anxiety',
      'Calms the nervous system'
    ],
    prepTime: 10,
    difficulty: 'easy',
    icon: '🌼'
  },
  {
    id: 'peppermint_digestion',
    name: 'Peppermint Digestive Tea',
    category: 'digestion',
    ingredients: [
      { name: 'Fresh peppermint leaves', amount: '6-8', unit: 'leaves' },
      { name: 'Hot water', amount: '1', unit: 'cup' },
      { name: 'Honey', amount: '1', unit: 'teaspoon' }
    ],
    instructions: [
      'Crush fresh peppermint leaves slightly to release oils',
      'Place in a cup and pour hot water',
      'Steep for 5-7 minutes',
      'Strain the leaves',
      'Add honey to taste',
      'Drink after meals'
    ],
    benefits: [
      'Aids digestion',
      'Relieves bloating',
      'Soothes stomach discomfort',
      'Freshens breath'
    ],
    prepTime: 8,
    difficulty: 'easy',
    icon: '🌿'
  },
  {
    id: 'garlic_immunity',
    name: 'Garlic & Ginger Immunity Booster',
    category: 'immunity',
    ingredients: [
      { name: 'Fresh garlic cloves', amount: '2-3', unit: 'cloves' },
      { name: 'Fresh ginger root', amount: '1', unit: 'inch piece' },
      { name: 'Lemon', amount: '1', unit: 'whole' },
      { name: 'Honey', amount: '1', unit: 'tablespoon' },
      { name: 'Hot water', amount: '1', unit: 'cup' }
    ],
    instructions: [
      'Mince garlic and ginger finely',
      'Squeeze lemon juice',
      'Combine garlic, ginger, and lemon juice in a cup',
      'Pour hot water over the mixture',
      'Steep for 10 minutes',
      'Add honey and drink warm'
    ],
    benefits: [
      'Strengthens immune system',
      'Antibacterial properties',
      'Reduces inflammation',
      'Supports overall health'
    ],
    prepTime: 15,
    difficulty: 'easy',
    icon: '🧄'
  },
  {
    id: 'green_tea_energy',
    name: 'Green Tea Energy Blend',
    category: 'energy',
    ingredients: [
      { name: 'Green tea bag or loose leaves', amount: '1', unit: 'teaspoon' },
      { name: 'Hot water', amount: '1', unit: 'cup' },
      { name: 'Honey', amount: '1', unit: 'teaspoon' },
      { name: 'Lemon juice', amount: '1', unit: 'teaspoon' }
    ],
    instructions: [
      'Brew green tea in hot water for 3-5 minutes',
      'Strain the tea',
      'Add honey and lemon juice',
      'Drink in the morning for sustained energy'
    ],
    benefits: [
      'Natural energy boost',
      'Contains antioxidants',
      'Improves focus and concentration',
      'Supports metabolism'
    ],
    prepTime: 5,
    difficulty: 'easy',
    icon: '🍃'
  },
  {
    id: 'lavender_stress',
    name: 'Lavender Stress Relief Tea',
    category: 'stress',
    ingredients: [
      { name: 'Dried lavender flowers', amount: '1', unit: 'teaspoon' },
      { name: 'Hot water', amount: '1', unit: 'cup' },
      { name: 'Honey', amount: '1', unit: 'teaspoon' },
      { name: 'Lemon balm (optional)', amount: '1', unit: 'teaspoon' }
    ],
    instructions: [
      'Place dried lavender in a cup',
      'Pour hot water over lavender',
      'Steep for 5-10 minutes',
      'Strain the flowers',
      'Add honey and optional lemon balm',
      'Drink slowly to promote relaxation'
    ],
    benefits: [
      'Reduces stress and anxiety',
      'Promotes relaxation',
      'Calms racing thoughts',
      'Improves mood'
    ],
    prepTime: 10,
    difficulty: 'easy',
    icon: '💜'
  }
];

export const getRecipesByCategory = (category: WellnessRecipe['category']): WellnessRecipe[] => {
  return WELLNESS_RECIPES.filter(recipe => recipe.category === category);
};

export const getAllRecipes = (): WellnessRecipe[] => {
  return WELLNESS_RECIPES;
};

export const getRecipeById = (id: string): WellnessRecipe | undefined => {
  return WELLNESS_RECIPES.find(recipe => recipe.id === id);
};

export const searchRecipes = (query: string): WellnessRecipe[] => {
  const lowerQuery = query.toLowerCase();
  return WELLNESS_RECIPES.filter(
    recipe =>
      recipe.name.toLowerCase().includes(lowerQuery) ||
      recipe.benefits.some(benefit => benefit.toLowerCase().includes(lowerQuery))
  );
};
