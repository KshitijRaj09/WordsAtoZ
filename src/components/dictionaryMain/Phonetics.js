import React from "react";

export default function Phonetics({ phonetics }) {
  return phonetics.map((data, index) => {
    return (
      <div key={index}>
        <i>{data.text}</i>
        <a href={data.audio} target="blank">
          Play
        </a>
      </div>
    );
  });
}

Phonetics.defaultProps = {
  phonetics: []
};
