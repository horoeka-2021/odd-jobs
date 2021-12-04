import React from 'react'
import { Link } from 'react-router-dom'

function JobListItem ({ jobs }) {
  console.log('jobsItem', jobs)
  return (
    <div>
      <button><Link to='/jobs/new'>Add New Job</Link></button>
      {jobs.map((jobs) => {
        return (
          <ul key={jobs.jobsId}>
            <li>{jobs.jobsId}</li>
            <li>{jobs.jobsTitle}</li>
          </ul>
        )
      })}
    </div>

  )
}

export default JobListItem
