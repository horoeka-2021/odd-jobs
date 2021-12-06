import React, { useState } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import JobListItem from './JobListItem'

function Jobs (props) {
  const { path, url } = useRouteMatch()
  const { jobs, userID } = props
  console.log('job list', path)
  console.log('joblist', jobs, userID) // memebr
  const [showDetail, setShowDetail] = useState(false)
  

  function handleDetail () {
    console.log('show')
    setShowDetail(true)
  }
  /// get by user
  // all job unde this user - 4
  // id to id

  return (
    <div>

      <h3>You have listed {jobs.length} jobs</h3>

      {jobs.map((data) => {
        return (
          <div key={data.jobsId}>

            <p>{data.jobsId}</p>
            <p>{data.jobsTitle}</p>
            <button onClick={handleDetail}>More detail</button>
          </div>
        )
      })}

      {/* <div>
        { showDetail &&
        <JobListItem />
        }
      </div> */}

    </div>
  )
}

export default Jobs
