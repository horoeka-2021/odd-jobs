import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobListItem from './JobListItem'

function Jobs (props) {
  return (
    <div>
      <div>
        <h4>10 jobs found</h4>
      </div>
      <JobListItem key='id'/>

    </div>
  )
}

export default Jobs
