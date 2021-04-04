import React, { useEffect, useState } from "react";
import axios from "axios";
import { CssBaseline } from "@material-ui/core";
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

<<<<<<< HEAD
    searchWord = async (input,language)=>{
        this.setState({loading:true});
        try{
            const response= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${input}`);
            this.setState({data:response.data[0], loading: false});
        }
        catch(error){
            this.setState({data:'', loading:false});
            console.log('in Catch block : '+ error);
        }
            
=======
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
>>>>>>> 3430ea3ac712ea94194c2d875987c9f1bc04c1ce
    }
  };

<<<<<<< HEAD
    render(){
        return (
        <div className="">
            <div className='app-container'>
            <div className='title-div'>Welcome to {this.title}</div>
            <div></div>
            <div className='search-div'><Search searchWord={this.searchWord}/></div>
            </div>
           
            <div>
                {this.state.loading?<Loading/> : <DictionaryContainer dictionaryData={this.state.data}/>}
            </div>
        </div>
        );
    }
}
=======
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

      <div>{renderComponent()}</div>
    </div>
  );
};
>>>>>>> 3430ea3ac712ea94194c2d875987c9f1bc04c1ce

export default App;
