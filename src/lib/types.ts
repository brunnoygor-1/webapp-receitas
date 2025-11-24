// Tipos principais do RecipePRO

export interface Ingredient {
  id: string;
  name: string;
  category?: string;
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  prepTime: number; // em minutos
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  calories: number;
  servings: number;
  ingredients: RecipeIngredient[];
  instructions: string[];
  nutrition: NutritionInfo;
  category: 'Café da Manhã' | 'Almoço' | 'Jantar' | 'Lanche' | 'Sobremesa';
  diet?: string[];
}

export interface RecipeIngredient {
  ingredient: string;
  amount: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface UserPantry {
  ingredients: string[];
}
