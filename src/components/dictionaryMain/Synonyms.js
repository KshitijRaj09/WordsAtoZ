import React from "react";

export default function Synonyms({ synonyms }) {
  const synonymsList = synonyms.map((data, index) => {
    return <li key={index}>{data}</li>;
  });

  return (
    <div>
      <ul>Similar: {synonymsList}</ul>
    </div>
  );
}

Synonyms.defaultProps = {
  synonyms: []
};
