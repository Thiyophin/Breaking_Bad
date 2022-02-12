import React from 'react'

function Header() {
  return (
    <div>
      <header className='center'>
        <img src={require("../Images/logo.png")} alt="Breaking Bad Logo" />
      </header>
    </div>
  )
}

export default Header