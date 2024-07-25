import React from "react";
import { Direction, Recipe } from "../../lib/recipes";
import { slateToHtml } from "@slate-serializers/html";

export default function Directions({
  directions,
}: {
  directions: Recipe["directions"];
}) {
  // return <pre>{JSON.stringify(directions, null, 2)}</pre>;
  return (
    <div>
      <h2>Directions</h2>
      <div className="flex flex-col gap-3">
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
    <div>
      <div className="text-base font-medium">Step #{index + 1}</div>
      <div
        className="rich-text"
        dangerouslySetInnerHTML={{
          __html: slateToHtml(direction.direction_step_description),
        }}
      ></div>
    </div>
  );
}
