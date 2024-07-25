import React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import PageContainer from "../components/shared/PageContainer";
import { slateToHtml } from "@slate-serializers/html";
import { Recipe } from "../lib/recipes";
import Ingredients from "../components/recipes/Ingredients";

type DataProps = {
  sitePage: {
    id: string;
    pageContext: Recipe;
  };
};
function RecipeTemplate({
  data: {
    sitePage: { pageContext: recipe },
  },
}: PageProps<DataProps>) {
  const { title, date, image_url, description } = recipe;
  const dateString = new Date(date).toLocaleDateString();
  return (
    <PageContainer>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div>{dateString}</div>
      {image_url && <img src={image_url} />}
      <div dangerouslySetInnerHTML={{ __html: slateToHtml(description) }}></div>
      {/* Ingredients */}
      <Ingredients ingredients={recipe.ingredients} />
      {/* Directions */}
    </PageContainer>
  );
}

export default RecipeTemplate;
export const pageQuery = graphql`
  query RecipePageQuery($siteId: String!) {
    sitePage(id: { eq: $siteId }) {
      id
      pageContext
    }
  }
`;
