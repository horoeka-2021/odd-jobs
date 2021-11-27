import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { getExamples } from '../api/example'
// using redux async action
import { fetchExamples } from '../actions/examples'

function ExampleDataFromServer () {
  // disabled the below to use Redux not local state
  // const [contentFromDB, setContentFromDB] = useState([])
  const dispatch = useDispatch()
  const contentFromDB = useSelector(state => state.examples)

  useEffect(() => {
    dispatch(fetchExamples())
  }, [])

  // changed to use Redux action
  // async function fetchExamples () {
  //   // const obj = {
  //   //   title: 'Test title'
  //   // }
  //   try {
  //     const fetchData = await getExamples()
  //     setContentFromDB(fetchData)
  //   } catch (error) {
  //     setContentFromDB([])
  //   }
  // }

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
