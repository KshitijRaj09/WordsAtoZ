import React from 'react';

export default function Phonetics({phonetics}){
    return phonetics.map((data)=>{
        return(
            <div key={data.text}>
                    <i>{data.text}</i>
                    <a href={data.audio} target='blank'>Play</a>
            </div>
          )
    });
}

Phonetics.defaultProps = {
    phonetics:[]
  };
