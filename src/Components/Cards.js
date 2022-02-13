import React from 'react'

function Cards({characters}) {
  return (
    <div className='card' key={characters.char_id}>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={characters.img} alt='' />
      </div>
      <div className='card-back'>
        <h1>{characters.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {characters.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {characters.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {characters.birthday}
          </li>
          <li>
            <strong>Status:</strong> {characters.status}
          </li>
          
            <strong>Occupation:-</strong> {characters.occupation.map((works,index)=>{
              return( 
                 <li key={index}>{works}</li>
              )
            })}
          
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Cards