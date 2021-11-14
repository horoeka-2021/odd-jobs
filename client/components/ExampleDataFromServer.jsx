import React, { useEffect, useState } from 'react'

import { getExamples } from '../api/example'

function ExampleDataFromServer () {
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

  return (
    <div>
      <h2>Hello from Example React component 2</h2>
      <p>These records come from database</p>
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

export default ExampleDataFromServer
