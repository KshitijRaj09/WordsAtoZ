import React from 'react';
import axios from 'axios';
import Search from '../components/SearchBar';
import Loading from './loading/Loading';
import DictionaryContainer from './dictionaryMain/DictionaryContainer'

export default class App extends React.Component{
    title='WordsAtoZ';
    state={
        data:'',
        loading : false
    }

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
            
    }

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

