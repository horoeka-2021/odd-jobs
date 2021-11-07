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
      <h2>Example React component - props.title:{props.title}</h2>
      <p>The text you entered:{userInput}</p>
      <input onChange={handleChange} value={userInput}/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Example
