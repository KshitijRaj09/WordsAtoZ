import React from 'react'

export default function Synonyms({synonyms}) {
   const synonymsList = synonyms.map(data => {
        return(
            <ul>
                <li key={data}>
                    {data}
                </li>
            </ul>
        );
    });
    
    return (
        <div>
            {synonymsList}
        </div>
    );
};

Synonyms.defaultProps={
    synonyms:[]
};
