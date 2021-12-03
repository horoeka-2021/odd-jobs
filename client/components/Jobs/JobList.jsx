import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobListItem from './JobListItem'
import { fetchJobs } from '../../actions/jobs'

function Jobs (props) {
  const jobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  console.log(jobs)
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
