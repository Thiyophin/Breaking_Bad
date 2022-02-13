import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from './Cards';
import Spinner from './Spinner';
import Search from './Search';

function CardsContainer() {
const [details,setDetails] = useState([]); // use a null array,otherwise error will thrown when mapping.
const [loading,setLoad] = useState(true);
const [query,setQuery] = useState('');
useEffect(()=>{
  axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`).then((response)=>{
    //  console.log(response.data);
    setDetails(response.data);
    setLoad(false);
  })
},[query])
 return loading ? ( <Spinner/> ) : ( <>
   <Search findCharacter={(input)=>setQuery(input)}/>
   <div className='cards'>
      {details.map((characters)=>{
        return(
           <Cards key={characters.char_id} characters={characters}/>
        )
      })} 
    </div>
    </>
 )
}

export default CardsContainer