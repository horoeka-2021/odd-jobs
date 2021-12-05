import React, { useEffect, useState } from 'react'
import JobListItem from './JobListItem'

function Jobs (props) {
  return (
    <div>
      <div>
        <h4>10 jobs found</h4>
      </div>
      <JobListItem jobs={jobs}/>

    </div>
  )
}

export default Jobs
