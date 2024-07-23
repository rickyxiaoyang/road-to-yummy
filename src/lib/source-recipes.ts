type Ingredient = {
  id: string;
  ingredient: string;
  quantity: number;
  unit: string; // TODO: replace with convert-units typing
};

type Recipe = {
  id: number;
  published: boolean;
  title: string;
  slug: string;
  date: string;
  description: string;
  ingredients: Ingredient[];
  directions: any;
  categories: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
};
// TODO: add validation
export async function sourceRecipes(): Promise<Recipe[]> {
  const response = await fetch(`${process.env.CMS_URL}/api/recipes`);
  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.statusText}`);
  }
  return (await response.json()) as Recipe[];
}
