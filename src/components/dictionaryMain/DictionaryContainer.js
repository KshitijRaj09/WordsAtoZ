import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

const DictionaryContainer = ({ dictionaryData }) => {
  return (
    <>
      {
        <>
          <Phonetics phonetics={dictionaryData.phonetics} />
          <Meaning meaning={dictionaryData.meanings} />
        </>
      }
    </>
  );
};
export default DictionaryContainer;
