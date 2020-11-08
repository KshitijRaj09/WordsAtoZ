import React from 'react';
import Phonetics from './Phonetics';
import Meaning from './Meaning';


const DictionaryContainer = ({dictionaryData})=>{
return(
    <>
    {   
        <div>
        <Phonetics phonetics={dictionaryData.phonetics}/>
        <Meaning meaning={dictionaryData.meanings}/>
        </div>
    }
        
    </>
    );
} 


export default DictionaryContainer;