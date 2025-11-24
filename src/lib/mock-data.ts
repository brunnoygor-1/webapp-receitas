import { Recipe, Ingredient } from './types';

// Lista de ingredientes comuns para autocomplete
export const commonIngredients: Ingredient[] = [
  { id: '1', name: 'Arroz', category: 'Grãos' },
  { id: '2', name: 'Feijão', category: 'Grãos' },
  { id: '3', name: 'Frango', category: 'Proteínas' },
  { id: '4', name: 'Carne', category: 'Proteínas' },
  { id: '5', name: 'Ovo', category: 'Proteínas' },
  { id: '6', name: 'Leite', category: 'Laticínios' },
  { id: '7', name: 'Queijo', category: 'Laticínios' },
  { id: '8', name: 'Tomate', category: 'Vegetais' },
  { id: '9', name: 'Cebola', category: 'Vegetais' },
  { id: '10', name: 'Alho', category: 'Temperos' },
  { id: '11', name: 'Batata', category: 'Vegetais' },
  { id: '12', name: 'Cenoura', category: 'Vegetais' },
  { id: '13', name: 'Macarrão', category: 'Grãos' },
  { id: '14', name: 'Farinha de Trigo', category: 'Grãos' },
  { id: '15', name: 'Açúcar', category: 'Básicos' },
  { id: '16', name: 'Sal', category: 'Temperos' },
  { id: '17', name: 'Azeite', category: 'Óleos' },
  { id: '18', name: 'Manteiga', category: 'Laticínios' },
  { id: '19', name: 'Banana', category: 'Frutas' },
  { id: '20', name: 'Aveia', category: 'Grãos' },
];

// Receitas mockadas
export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Omelete Simples',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&h=600&fit=crop',
    prepTime: 10,
    difficulty: 'Fácil',
    calories: 220,
    servings: 1,
    category: 'Café da Manhã',
    diet: ['Low Carb', 'Sem Lactose'],
    ingredients: [
      { ingredient: 'Ovo', amount: '3 unidades' },
      { ingredient: 'Sal', amount: 'a gosto' },
      { ingredient: 'Azeite', amount: '1 colher de sopa' },
      { ingredient: 'Queijo', amount: '50g (opcional)' },
    ],
    instructions: [
      'Quebre os ovos em uma tigela e bata bem com um garfo',
      'Tempere com sal a gosto',
      'Aqueça uma frigideira antiaderente com azeite',
      'Despeje os ovos batidos e deixe cozinhar em fogo médio',
      'Quando as bordas começarem a firmar, adicione o queijo se desejar',
      'Dobre ao meio e sirva quente',
    ],
    nutrition: {
      calories: 220,
      protein: 18,
      carbs: 2,
      fat: 16,
      fiber: 0,
    },
  },
  {
    id: '2',
    name: 'Arroz com Feijão Tradicional',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop',
    prepTime: 45,
    difficulty: 'Fácil',
    calories: 380,
    servings: 4,
    category: 'Almoço',
    diet: ['Vegano', 'Sem Glúten'],
    ingredients: [
      { ingredient: 'Arroz', amount: '2 xícaras' },
      { ingredient: 'Feijão', amount: '1 xícara (cru)' },
      { ingredient: 'Alho', amount: '3 dentes' },
      { ingredient: 'Cebola', amount: '1 unidade' },
      { ingredient: 'Sal', amount: 'a gosto' },
      { ingredient: 'Azeite', amount: '2 colheres de sopa' },
    ],
    instructions: [
      'Deixe o feijão de molho por 8 horas',
      'Cozinhe o feijão na panela de pressão por 30 minutos',
      'Refogue alho e cebola no azeite',
      'Adicione o arroz e refogue por 2 minutos',
      'Adicione água (2x o volume do arroz) e sal',
      'Cozinhe em fogo baixo por 15-20 minutos',
      'Sirva o arroz com o feijão',
    ],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 68,
      fat: 6,
      fiber: 12,
    },
  },
  {
    id: '3',
    name: 'Frango Grelhado com Legumes',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
    prepTime: 30,
    difficulty: 'Médio',
    calories: 320,
    servings: 2,
    category: 'Almoço',
    diet: ['Low Carb', 'Sem Glúten'],
    ingredients: [
      { ingredient: 'Frango', amount: '400g (peito)' },
      { ingredient: 'Cenoura', amount: '2 unidades' },
      { ingredient: 'Batata', amount: '2 unidades' },
      { ingredient: 'Tomate', amount: '2 unidades' },
      { ingredient: 'Alho', amount: '4 dentes' },
      { ingredient: 'Azeite', amount: '3 colheres de sopa' },
      { ingredient: 'Sal', amount: 'a gosto' },
    ],
    instructions: [
      'Tempere o frango com sal e alho amassado',
      'Deixe marinar por 15 minutos',
      'Corte os legumes em cubos médios',
      'Grelhe o frango em uma frigideira quente por 6-8 minutos de cada lado',
      'Em outra panela, refogue os legumes com azeite',
      'Tempere os legumes com sal',
      'Sirva o frango com os legumes',
    ],
    nutrition: {
      calories: 320,
      protein: 42,
      carbs: 28,
      fat: 8,
      fiber: 6,
    },
  },
  {
    id: '4',
    name: 'Panqueca de Banana e Aveia',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&h=600&fit=crop',
    prepTime: 15,
    difficulty: 'Fácil',
    calories: 280,
    servings: 2,
    category: 'Café da Manhã',
    diet: ['Vegetariano', 'Sem Açúcar'],
    ingredients: [
      { ingredient: 'Banana', amount: '2 unidades maduras' },
      { ingredient: 'Ovo', amount: '2 unidades' },
      { ingredient: 'Aveia', amount: '1/2 xícara' },
      { ingredient: 'Manteiga', amount: '1 colher de sopa' },
    ],
    instructions: [
      'Amasse as bananas em uma tigela',
      'Adicione os ovos e misture bem',
      'Acrescente a aveia e misture até formar uma massa homogênea',
      'Aqueça uma frigideira com um pouco de manteiga',
      'Despeje porções da massa e cozinhe por 2-3 minutos de cada lado',
      'Sirva com frutas ou mel',
    ],
    nutrition: {
      calories: 280,
      protein: 12,
      carbs: 42,
      fat: 8,
      fiber: 6,
    },
  },
  {
    id: '5',
    name: 'Macarrão ao Alho e Óleo',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop',
    prepTime: 20,
    difficulty: 'Fácil',
    calories: 420,
    servings: 2,
    category: 'Jantar',
    diet: ['Vegetariano'],
    ingredients: [
      { ingredient: 'Macarrão', amount: '200g' },
      { ingredient: 'Alho', amount: '6 dentes' },
      { ingredient: 'Azeite', amount: '4 colheres de sopa' },
      { ingredient: 'Sal', amount: 'a gosto' },
      { ingredient: 'Queijo', amount: '50g ralado (opcional)' },
    ],
    instructions: [
      'Cozinhe o macarrão em água fervente com sal conforme instruções da embalagem',
      'Enquanto isso, fatie o alho finamente',
      'Em uma frigideira, aqueça o azeite e doure o alho levemente',
      'Escorra o macarrão e adicione à frigideira com o alho',
      'Misture bem para o macarrão absorver o sabor',
      'Finalize com queijo ralado se desejar',
    ],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 58,
      fat: 16,
      fiber: 3,
    },
  },
  {
    id: '6',
    name: 'Salada Completa',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    prepTime: 15,
    difficulty: 'Fácil',
    calories: 180,
    servings: 2,
    category: 'Lanche',
    diet: ['Vegano', 'Low Carb', 'Sem Glúten'],
    ingredients: [
      { ingredient: 'Tomate', amount: '3 unidades' },
      { ingredient: 'Cebola', amount: '1 unidade' },
      { ingredient: 'Cenoura', amount: '1 unidade' },
      { ingredient: 'Azeite', amount: '2 colheres de sopa' },
      { ingredient: 'Sal', amount: 'a gosto' },
    ],
    instructions: [
      'Lave bem todos os vegetais',
      'Corte os tomates em cubos',
      'Pique a cebola finamente',
      'Rale a cenoura',
      'Misture tudo em uma tigela',
      'Tempere com azeite e sal',
      'Sirva fresca',
    ],
    nutrition: {
      calories: 180,
      protein: 3,
      carbs: 18,
      fat: 12,
      fiber: 5,
    },
  },
];

// Função para filtrar receitas por ingredientes
export function filterRecipesByIngredients(
  recipes: Recipe[],
  userIngredients: string[]
): Recipe[] {
  if (userIngredients.length === 0) return recipes;

  return recipes
    .map((recipe) => {
      const matchCount = recipe.ingredients.filter((ri) =>
        userIngredients.some(
          (ui) => ui.toLowerCase() === ri.ingredient.toLowerCase()
        )
      ).length;

      return { recipe, matchCount };
    })
    .filter((item) => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map((item) => item.recipe);
}
