import React from 'react';
import Definitions from './Definitions';

export default function Meaning({meaning}) {
    const meaningList=meaning.map((data)=>{
        return(
            <div key={data.partOfSpeech}>
                <Definitions definitions={data.definitions}/>         
            </div>
        )
    });
    return(
        <div>{meaningList}</div>
    )
}

Meaning.defaultProps={
    meaning:[]
};
