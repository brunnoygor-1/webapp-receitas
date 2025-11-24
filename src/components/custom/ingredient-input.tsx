'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Plus } from 'lucide-react';
import { commonIngredients } from '@/lib/mock-data';

interface IngredientInputProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

export function IngredientInput({
  selectedIngredients,
  onIngredientsChange,
}: IngredientInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue.trim().length > 0) {
      const filtered = commonIngredients
        .filter(
          (ing) =>
            ing.name.toLowerCase().includes(inputValue.toLowerCase()) &&
            !selectedIngredients.includes(ing.name)
        )
        .map((ing) => ing.name)
        .slice(0, 6);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, selectedIngredients]);

  const addIngredient = (ingredient: string) => {
    if (ingredient.trim() && !selectedIngredients.includes(ingredient)) {
      onIngredientsChange([...selectedIngredients, ingredient]);
      setInputValue('');
      setSuggestions([]);
      setShowSuggestions(false);
      inputRef.current?.focus();
    }
  };

  const removeIngredient = (ingredient: string) => {
    onIngredientsChange(
      selectedIngredients.filter((ing) => ing !== ingredient)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (suggestions.length > 0) {
        addIngredient(suggestions[0]);
      } else {
        addIngredient(inputValue);
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Input com autocomplete */}
      <div className="relative">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite um ingrediente (ex: frango, arroz, tomate...)"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF7A00] focus:outline-none transition-colors text-base"
          />
          <button
            onClick={() => addIngredient(inputValue)}
            disabled={!inputValue.trim()}
            className="px-6 py-3 bg-[#FF7A00] text-white rounded-xl hover:bg-[#E66D00] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Adicionar
          </button>
        </div>

        {/* Sugestões de autocomplete */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => addIngredient(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags de ingredientes selecionados */}
      {selectedIngredients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedIngredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-[#FF7A00] rounded-full font-medium"
            >
              <span>{ingredient}</span>
              <button
                onClick={() => removeIngredient(ingredient)}
                className="hover:bg-orange-200 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Contador de ingredientes */}
      {selectedIngredients.length > 0 && (
        <p className="text-sm text-gray-600">
          {selectedIngredients.length}{' '}
          {selectedIngredients.length === 1
            ? 'ingrediente selecionado'
            : 'ingredientes selecionados'}
        </p>
      )}
    </div>
  );
}
