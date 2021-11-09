import React, { useEffect, useState } from 'react'

import { getExamples } from '../api/example'

function Example (props) {
  const [userInput, setUserInput] = useState('')
  const [contentFromDB, setContentFromDB] = useState([])

  useEffect(() => {
    fetchExamples()
  }, [])

  async function fetchExamples () {
    // const obj = {
    //   title: 'Test title'
    // }
    try {
      const fetchData = await getExamples()
      setContentFromDB(fetchData)
    } catch (error) {
      setContentFromDB([])
    }
  }

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
      <p>This is from database</p>
      <ul>
        {
          contentFromDB.length > 0 && contentFromDB.map((ele) => {
            return (
              <li key={ele.id}>{ele.title} : {ele.description} - {ele.count}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Example
