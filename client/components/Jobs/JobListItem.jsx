import React from 'react'
// import { Link } from 'react-router-dom'

function JobListItem ({ jobs }) {
  return (
    <div>
      {jobs.map((jobs) => {
        return (
          <div key={jobs.jobsId}>
            <ul key={jobs.jobsId}>
              <li>{jobs.jobsId}</li>
              <li>{jobs.jobsTitle}</li>
            </ul>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )
      })}

    </div>

  )
}

export default JobListItem
