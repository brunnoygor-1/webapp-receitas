'use client';

import { Recipe } from '@/lib/types';
import { Clock, Flame, ChefHat } from 'lucide-react';
import Image from 'next/image';

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const difficultyColors = {
    Fácil: 'bg-green-100 text-green-700',
    Médio: 'bg-yellow-100 text-yellow-700',
    Difícil: 'bg-red-100 text-red-700',
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:scale-[1.02]"
    >
      {/* Imagem */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badge de categoria */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          {recipe.category}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 space-y-3">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors line-clamp-2">
          {recipe.name}
        </h3>

        {/* Informações principais */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#FF7A00]" />
            <span>{recipe.prepTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>{recipe.calories} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4 text-[#FF7A00]" />
            <span>{recipe.servings} porções</span>
          </div>
        </div>

        {/* Dificuldade */}
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              difficultyColors[recipe.difficulty]
            }`}
          >
            {recipe.difficulty}
          </span>
          {recipe.diet && recipe.diet.length > 0 && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
              {recipe.diet[0]}
            </span>
          )}
        </div>

        {/* Ingredientes preview */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            {recipe.ingredients.length} ingredientes
          </p>
        </div>
      </div>
    </div>
  );
}
