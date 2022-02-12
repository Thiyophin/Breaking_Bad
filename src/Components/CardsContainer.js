import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from './Cards';
import Spinner from './Spinner';

function CardsContainer() {
const [details,setDetails] = useState([]); // use a null array,otherwise error will thrown when mapping.
const [loading,setLoad] = useState(true);
useEffect(()=>{
  axios.get('https://www.breakingbadapi.com/api/characters').then((response)=>{
    console.log(response.data);
    setDetails(response.data);
    setLoad(false);
  })
},[])
 return loading ? ( <Spinner/> ) : ( <div className='cards'>
      {details.map((characters)=>{
        return(
           <Cards key={characters.char_id} characters={characters}/>
        )
      })} 
    </div>
 )
}

export default CardsContainer