import React from 'react'
function Search({findCharacter}) {
  return (
    <div style={{marginBottom:"20px"}}>
      <form>
        <input type="text" className='form-control'
          placeholder='Search characters'
          onChange={(e)=>{
            findCharacter(e.target.value);
          }}
          autoFocus />
      </form>
    </div>
  )
}

export default Search