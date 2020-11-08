import React from 'react';
import Dropdown from './Dropdown';

class SearchBar extends React.Component{
    state={
        input:'',
        language:'en'
    }

    inputChange=(event)=>{
        this.setState({input:event.target.value});
        console.log(event.target.value);
    }

    dropDownHandler=(lang)=>{
        this.setState({language:lang});
    }


    submitHandler=(event)=>{
        event.preventDefault();
        this.props.searchWord(this.state.input, this.state.language);
    }

    render(){
        return(
            <div className=''>
            <form onSubmit={this.submitHandler}>
                <div className="ui icon input">
                        <Dropdown language={this.dropDownHandler}/>         
                    <input type="text" placeholder="Input Word" value={this.state.input} onInput={this.inputChange} style={{width:'250px'}}/>
                    <i className="inverted circular search link icon"></i>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;