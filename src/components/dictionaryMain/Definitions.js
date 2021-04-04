import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions({ definitions }) {
  const example = (example) => {
    if (example) {
      return <div>Example: {example}</div>;
    }
  };

  const synonyms = (synonyms) => {
    if (synonyms) {
      return (
        <div>
          <Synonyms synonyms={synonyms} />
        </div>
      );
    }
  };
  const definitionList = definitions.map((data) => {
    return (
      <div key={data.definition}>
        <div>Definiton: {data.definition}</div>
        {example(data.example)}
        {synonyms(data.synonyms)}
      </div>
    );
  });

  return <div>{definitionList}</div>;
}

Definitions.defaultProps = {
  definitions: []
};
