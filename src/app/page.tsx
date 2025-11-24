'use client';

import { useState } from 'react';
import { IngredientInput } from '@/components/custom/ingredient-input';
import { RecipeCard } from '@/components/custom/recipe-card';
import { RecipeModal } from '@/components/custom/recipe-modal';
import { mockRecipes, filterRecipesByIngredients } from '@/lib/mock-data';
import { Recipe } from '@/lib/types';
import { ChefHat, Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showResults, setShowResults] = useState(false);

  const filteredRecipes = filterRecipesByIngredients(
    mockRecipes,
    selectedIngredients
  );

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00] to-[#FF9500] rounded-xl flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Recipe<span className="text-[#FF7A00]">PRO</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!showResults && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-[#FF7A00] rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Receitas inteligentes baseadas no que você tem
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              O que você tem na{' '}
              <span className="text-[#FF7A00]">sua cozinha?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Digite os ingredientes que você possui e descubra receitas
              deliciosas que você pode fazer agora mesmo
            </p>
          </div>

          {/* Input de ingredientes */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
            <IngredientInput
              selectedIngredients={selectedIngredients}
              onIngredientsChange={setSelectedIngredients}
            />

            <button
              onClick={handleSearch}
              disabled={selectedIngredients.length === 0}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#FF7A00] to-[#FF9500] text-white rounded-xl hover:from-[#E66D00] hover:to-[#E68500] disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
            >
              <Sparkles className="w-6 h-6" />
              Ver Receitas Sugeridas
            </button>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <ChefHat className="w-6 h-6 text-[#FF7A00]" />
              </div>
              <h3 className="font-bold text-gray-900">Receitas Inteligentes</h3>
              <p className="text-sm text-gray-600">
                Sugestões baseadas nos seus ingredientes
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-[#FF7A00]" />
              </div>
              <h3 className="font-bold text-gray-900">Info Nutricionais</h3>
              <p className="text-sm text-gray-600">
                Calorias e macros de cada receita
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-[#FF7A00]" />
              </div>
              <h3 className="font-bold text-gray-900">Lista de Compras</h3>
              <p className="text-sm text-gray-600">
                Veja o que falta para fazer a receita
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Resultados */}
      {showResults && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Barra de busca compacta */}
          <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
            <IngredientInput
              selectedIngredients={selectedIngredients}
              onIngredientsChange={setSelectedIngredients}
            />
            <button
              onClick={() => setShowResults(false)}
              className="mt-4 text-sm text-gray-600 hover:text-[#FF7A00] transition-colors"
            >
              ← Voltar para busca inicial
            </button>
          </div>

          {/* Título dos resultados */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {filteredRecipes.length > 0
                ? `${filteredRecipes.length} ${
                    filteredRecipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'
                  }`
                : 'Nenhuma receita encontrada'}
            </h2>
            {filteredRecipes.length > 0 && (
              <p className="text-gray-600">
                Receitas que você pode fazer com os ingredientes selecionados
              </p>
            )}
          </div>

          {/* Grid de receitas */}
          {filteredRecipes.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => setSelectedRecipe(recipe)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-md">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nenhuma receita encontrada
              </h3>
              <p className="text-gray-600 mb-6">
                Tente adicionar mais ingredientes ou remover alguns filtros
              </p>
              <button
                onClick={() => setShowResults(false)}
                className="px-6 py-3 bg-[#FF7A00] text-white rounded-xl hover:bg-[#E66D00] transition-colors font-medium"
              >
                Fazer nova busca
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modal de receita */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          userIngredients={selectedIngredients}
        />
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="font-medium">
              Recipe<span className="text-[#FF7A00]">PRO</span>
            </p>
            <p className="text-sm mt-2">
              Transformando ingredientes em receitas deliciosas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
