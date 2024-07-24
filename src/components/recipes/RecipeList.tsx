import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Recipe } from "../../lib/recipes";
import { byDateDescending } from "../../lib/utils";
import RecipeCard from "./RecipeCard";

const pageQuery = graphql`
  query RecipeList {
    allSitePage(filter: { path: { regex: "/^/recipe//" } }) {
      edges {
        node {
          id
          pageContext
        }
      }
    }
  }
`;

export default function RecipeList() {
  const data = useStaticQuery<Queries.RecipeListQuery>(pageQuery);
  const recipes = data.allSitePage.edges.map(
    (edge) => edge.node.pageContext
  ) as Recipe[];

  return (
    <div className="flex flex-col gap-8 items-center">
      {recipes.sort(byDateDescending).map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  );
}
