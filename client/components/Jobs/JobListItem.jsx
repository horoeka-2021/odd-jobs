import React from 'react'
import { Link } from 'react-router-dom'

function JobListItem ({ jobs }) {
  console.log('jobsItem', jobs)
  return (
    <div>
      <button><Link to='/job/new'>Add New Job</Link></button>
      <h1>Jobbbbbbb</h1>
      {jobs.map((jobs) => {
        return (

          <p key={jobs.jobsId}>{jobs.jobsTitle}</p>
        )
      })}

    </div>

  )
}

export default JobListItem
