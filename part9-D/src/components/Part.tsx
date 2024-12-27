import React from "react";
import { CoursePart } from "../types";

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
  switch (part.kind) {
    case "basic":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
        </div>
      );
    case "group":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Group projects: {part.groupProjectCount}</p>
        </div>
      );
    case "background":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
          <p>Background material: {part.backgroundMaterial}</p>
        </div>
      );
    case "special":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
          <p>Background material: {part.requirements.join(", ")}</p>
        </div>
      );
    default:
      const _exhaustiveCheck: never = part;
      console.log(_exhaustiveCheck);
      throw new Error(`Unhandled part type: ${JSON.stringify(part)}`);
  }
};

export default Part;
