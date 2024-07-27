import { CMSClient } from "./api";

export type Ingredient = {
  id: string;
  ingredient: string;
  quantity?: number;
  unit?: string; // TODO: replace with convert-units typing
};

export type RichText = any[];

export type Direction = {
  id: string;
  image_url?: string;
  direction_step_description: RichText;
};

export type Recipe = {
  id: number;
  published: boolean;
  title: string;
  image_url?: string;
  short_description: string;
  slug: string;
  date: string;
  description: any[];
  ingredients: Ingredient[];
  directions: Direction[];
  categories: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export async function getRecipes(): Promise<Recipe[]> {
  const client = new CMSClient();
  const json = await client.get<{ docs: Recipe[] }>("/api/recipes");
  const recipes = json.docs;
  return recipes;
}
