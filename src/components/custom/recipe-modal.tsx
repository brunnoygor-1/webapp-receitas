'use client';

import { Recipe } from '@/lib/types';
import { X, Clock, Flame, ChefHat, Share2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
  userIngredients: string[];
}

export function RecipeModal({
  recipe,
  onClose,
  userIngredients,
}: RecipeModalProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const missingIngredients = recipe.ingredients.filter(
    (ri) =>
      !userIngredients.some(
        (ui) => ui.toLowerCase() === ri.ingredient.toLowerCase()
      )
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: `Confira essa receita: ${recipe.name}`,
        url: window.location.href,
      });
    } else {
      alert('Compartilhamento não suportado neste navegador');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header com imagem */}
        <div className="relative h-64 w-full">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Título e informações principais */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{recipe.name}</h2>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-[#FF7A00]" />
                <span>{recipe.prepTime} minutos</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Flame className="w-5 h-5 text-[#FF7A00]" />
                <span>{recipe.calories} kcal</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ChefHat className="w-5 h-5 text-[#FF7A00]" />
                <span>{recipe.servings} porções</span>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-[#FF7A00] rounded-full text-xs font-medium">
                {recipe.difficulty}
              </span>
            </div>

            {/* Botões de ação */}
            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Compartilhar
              </button>
              {missingIngredients.length > 0 && (
                <button className="flex-1 px-6 py-3 bg-[#FF7A00] text-white rounded-xl hover:bg-[#E66D00] transition-colors font-medium flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Lista de Compras
                </button>
              )}
            </div>
          </div>

          {/* Ingredientes */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Ingredientes</h3>
            <div className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => {
                const hasIngredient = userIngredients.some(
                  (ui) => ui.toLowerCase() === ingredient.ingredient.toLowerCase()
                );
                return (
                  <label
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={checkedIngredients.includes(
                        ingredient.ingredient
                      )}
                      onChange={() => toggleIngredient(ingredient.ingredient)}
                      className="mt-1 w-5 h-5 text-[#FF7A00] rounded focus:ring-[#FF7A00]"
                    />
                    <div className="flex-1">
                      <span
                        className={`${
                          checkedIngredients.includes(ingredient.ingredient)
                            ? 'line-through text-gray-400'
                            : 'text-gray-700'
                        }`}
                      >
                        {ingredient.amount} de {ingredient.ingredient}
                      </span>
                      {hasIngredient && (
                        <span className="ml-2 text-xs text-green-600 font-medium">
                          ✓ Você tem
                        </span>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Modo de preparo */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Modo de Preparo</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#FF7A00] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Informações nutricionais */}
          <div className="space-y-3 bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900">
              Informações Nutricionais
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF7A00]">
                  {recipe.nutrition.calories}
                </p>
                <p className="text-sm text-gray-600">Calorias</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF7A00]">
                  {recipe.nutrition.protein}g
                </p>
                <p className="text-sm text-gray-600">Proteínas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF7A00]">
                  {recipe.nutrition.carbs}g
                </p>
                <p className="text-sm text-gray-600">Carboidratos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF7A00]">
                  {recipe.nutrition.fat}g
                </p>
                <p className="text-sm text-gray-600">Gorduras</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF7A00]">
                  {recipe.nutrition.fiber}g
                </p>
                <p className="text-sm text-gray-600">Fibras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
