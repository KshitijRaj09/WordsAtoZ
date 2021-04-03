import React, { useState } from "react";

const NavBar = (props) => {
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("en");

  const inputChange = (event) => {
    setWord(event.target.value);
    console.log(event.target.value);
  };

  const dropDownHandler = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.searchMeaning(word, language);
  };

  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="ui icon input">
          <div>
            <label>
              Select Language
              <select
                value={language}
                onChange={dropDownHandler}
                className="ui dropdown"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="ja">Japansese</option>
                <option value="ru">Russian</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="ko">Korean</option>
                <option value="pt-BR">Brazilian Portuguese</option>
                <option value="ar">Arabic</option>
                <option value="tr">Turkish</option>
              </select>
            </label>
          </div>
          <input
            type="text"
            placeholder="Input Word"
            value={word}
            onInput={inputChange}
            style={{ width: "250px" }}
          />
          <i className="inverted circular search link icon"></i>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
