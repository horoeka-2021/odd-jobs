import React, { useState } from 'react'

function Example (props) {
  const [userInput, setUserInput] = useState('')

  function handleClick (event) {
    setUserInput(userInput.toUpperCase())
  }

  function handleChange (event) {
    setUserInput(event.target.value)
  }

  return (
    <div>
      <h2>Hello from Example React component 1</h2>
      <p>props.title:{props.title}</p>
      <p>The text you entered:{userInput}</p>
      <input onChange={handleChange} value={userInput}/>
      <button onClick={handleClick}>Convert to uppercase</button>
    </div>
  )
}

export default Example
