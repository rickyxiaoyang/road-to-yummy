import React from "react";
import { Recipe } from "../../lib/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="w-full sm:w-full sm:max-w-screen-lg bg-white shadow-sm flex flex-col sm:flex-row justify-start">
      <div
        className={`w-full sm:w-2/3 h-[300px] bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${recipe.image_url})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full p-5 my-auto">
        <div className="flex flex-col gap-3 items-center text-center">
          <div className="uppercase text-xl font-bold">{recipe.title}</div>
          <div className="text-sm font-thin">{recipe.short_description}</div>
          <a
            href={`/recipe/${recipe.slug}`}
            className="px-4 py-2 bg-slate-600 hover:bg-slate-400 text-white rounded-lg text-xs font-thin max-w-fit animate-fade transition-all"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
}
