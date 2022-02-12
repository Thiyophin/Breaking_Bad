import React from 'react'

function Spinner() {
  return (
    <div>
      <img src={require("../Images/spinner.gif")} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading" />
    </div>
  )
}

export default Spinner