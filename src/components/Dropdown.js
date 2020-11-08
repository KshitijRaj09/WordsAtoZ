import React from 'react';

export default class Dropdown extends React.Component{
    constructor(){
        super();
        this.state={
            language:'en'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event){
       await this.setState({language: event.target.value});
        this.props.language(this.state.language);
    }

    render(){
        return(
            <div>
            <label>Select Language
            <select value={this.state.language} onChange={this.handleChange} className="ui dropdown">
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
        );
    }
}