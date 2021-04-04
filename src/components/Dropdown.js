import React from 'react';

export default Dropdown = (props)=>{
    
    async handleChange(event){
       await this.setState({language: event.target.value});
        this.props.language(this.state.language);
    }

    render(){
        return(
            
        );
    }
}