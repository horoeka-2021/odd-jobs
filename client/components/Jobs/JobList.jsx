import React, { useState } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'


import JobListItem from './JobListItem'

function Jobs (props) {
  const { path, url } = useRouteMatch()
  const { jobs } = props
  console.log('job list', path)
  console.log('joblist', jobs) // memebr
  const [showDetail, setShowDetail] = useState(false)
  const [jobID, setJobId] = useState('')

  function handleDetail (jobID) {
    setJobId(jobID)
    setShowDetail(true)
  }
  /// get by user
  // all job unde this user - 4
  // id to id
  // function handleClose () {
  //   setShowDetail(false)
  // }

  return (
    <div>

      <h3>You have listed {jobs.length} jobs</h3>

      {jobs.map((data) => {
        return (
          <div key={data.jobsId}>

            <p>{data.jobsId}</p>
            <p>{data.jobsTitle}</p>
            <button onClick={() => handleDetail(data.jobsId)}>More detail</button>
            {/* <button onClick={() => handleClose()}>More detail</button> */}
          </div>
        )
      })}

      {/* <Route exact path={`${path}/details`} >
        <JobListItem jobID={jobs.jobsID} />
      </Route> */}

      <div>
        { showDetail &&
        <JobListItem jobID={jobID}/>
        }
      </div>

    </div>
  )
}

export default Jobs
