import React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import PageContainer from "../shared/PageContainer";
import { slateToHtml } from "@slate-serializers/html";
import { Recipe } from "../../lib/recipes";
import Ingredients from "../recipes/Ingredients";
import Directions from "../recipes/Directions";

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
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div>{dateString}</div>
        <div className="flex flex-col gap-8">
          {image_url && <img src={image_url} />}
          <div
            className="rich-text flex flex-col gap-2"
            dangerouslySetInnerHTML={{ __html: slateToHtml(description) }}
          ></div>
          {/* Ingredients */}
          <Ingredients ingredients={recipe.ingredients} />
          {/* Directions */}
          <Directions directions={recipe.directions} />
        </div>
      </div>
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
export const Head: HeadFC = ({ pageContext }) => {
  const recipe = pageContext as Recipe;
  return <title>{recipe.title} | Road to Yummy</title>;
};
