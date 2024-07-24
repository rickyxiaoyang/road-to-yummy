import path from "path";
import { getRecipes } from "./src/lib/recipes";
import { CreatePagesArgs, GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
}: CreatePagesArgs) => {
  const template = path.resolve(`src/templates/recipe.tsx`);
  const recipes = await getRecipes();
  recipes.forEach((recipe) => {
    createPage({
      path: `recipe/${recipe.slug}`,
      component: template,
      context: {
        ...recipe,
      },
    });
  });
};
