import React from 'react'
import JobListItem from './JobListItem'

function Jobs (props) {
  const { jobs } = props
  return (
    <div>

      <h4>You have list {jobs.length} jobs</h4>

      <div>

        <JobListItem jobs={jobs}/>

      </div>

    </div>
  )
}

export default Jobs
