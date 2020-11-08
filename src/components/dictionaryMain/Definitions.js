import React from 'react';
import Synonyms from './Synonyms';

export default function Definitions({definitions}){
    const definitionList = definitions.map((data)=>{
        return(
            <div key={data.definition}>
                <div>
                    Definiton: {data.definition}
                </div>
                <div>
                    Example: {data.example}
                </div>
                <div>
                    <Synonyms synonyms={data.synonyms}/>
                </div>

            </div>
        )
    })
    
    return (
        <div>{definitionList}</div>
    )
}

Definitions.defaultProps={
    definitions:[]
};

