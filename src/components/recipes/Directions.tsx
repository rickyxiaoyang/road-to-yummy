import React from "react";
import { Direction, Recipe } from "../../lib/recipes";
import { slateToHtml } from "@slate-serializers/html";

export default function Directions({
  directions,
}: {
  directions: Recipe["directions"];
}) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h2>Directions</h2>
        {directions.map((direction, index) => (
          <DirectionItem
            index={index}
            direction={direction}
            key={direction.id}
          />
        ))}
      </div>
    </div>
  );
}

function DirectionItem({
  direction,
  index,
}: {
  index: number;
  direction: Direction;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="text-base font-medium">{index + 1}. </span>
        <span
          className="rich-text"
          dangerouslySetInnerHTML={{
            __html: slateToHtml(direction.direction_step_description),
          }}
        ></span>
      </div>
      {direction.image_url && (
        <img className="mb-4" src={direction.image_url} />
      )}
    </div>
  );
}
