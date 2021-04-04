import React from "react";
import Definitions from "./Definitions";

export default function Meaning({ meaning }) {
  const meaningList = meaning.map((data, index) => {
    return (
      <div key={index}>
        <div>Part Of Speech : {data.partOfSpeech}</div>
        <Definitions definitions={data.definitions} />
      </div>
    );
  });
  return <div>{meaningList}</div>;
}

Meaning.defaultProps = {
  meaning: []
};
