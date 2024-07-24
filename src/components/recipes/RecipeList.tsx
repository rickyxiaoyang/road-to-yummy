import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Recipe } from "../../lib/recipes";
import { byDateDescending } from "../../lib/utils";

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
    <div className="">
      {recipes.sort(byDateDescending).map((recipe) => (
        <div key={recipe.slug}>
          {/* <RecipeItem recipe={recipe.frontmatter} /> */}
          <div>{recipe.title}</div>
        </div>
      ))}
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
