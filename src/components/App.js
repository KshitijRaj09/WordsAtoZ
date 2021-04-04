import React, { useEffect, useState } from "react";
import axios from "axios";
import { CssBaseline, Typography } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Loading from "./loading/Loading";
import DictionaryContainer from "./dictionaryMain/DictionaryContainer";
import ErrorPage from "./ErrorPage";

const App = () => {
  const appTitle = () => "WordsAtoZ";
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const searchMeaning = async (input, language) => {
    setLoading(true);
    setHasError(false);
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${input}`
      );
      setData(response.data[0]);
      setLoading(false);
      console.log(response.data[0]);
    } catch (error) {
      setData("");
      setLoading(false);
      setHasError(true);
      console.log("in Catch block : " + error);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    searchMeaning("hello", "en");
  }, []);

  const renderComponent = () => {
    if (!hasError && !loading && Object.keys(data).length > 2)
      return <DictionaryContainer dictionaryData={data} />;
    else
      return loading ? <Loading /> : <ErrorPage errorMessage={errorMessage} />;
  };
  return (
    <div>
      <NavBar searchMeaning={searchMeaning} />
      <Typography>
        <div
          style={{
            margin: "20px",
            backgroundColor: "#f3f4ed",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {renderComponent()}
        </div>
      </Typography>
    </div>
  );
};

export default App;
