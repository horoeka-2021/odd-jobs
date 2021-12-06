import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import JobListItem from './JobListItem'

function Jobs (props) {
  const { path, url } = useRouteMatch()
  const { jobs } = props
  // console.log('userID', userID)
  console.log('joblist', jobs)
  console.log(path, url)
  return (
    <div>

      <h3>You have listed {jobs.length} jobs</h3>

      {jobs.map((data) => {
        return (
          <div key={data.jobsId}>

            <p>{data.jobsId}</p>
            <p>{data.jobsTitle}</p>
            <Link to={`${url}/jobdetail`}><button>More detail</button></Link>
          </div>
        )
      })}

      <div>
        <Route path={`${url}/jobdetail`}>
          <JobListItem />
        </Route>

      </div>

    </div>
  )
}

export default Jobs
