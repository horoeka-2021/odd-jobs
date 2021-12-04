import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import JobListItem from './JobListItem'
import { getJobById } from '../../api/jobs'

function Jobs (props) {
  const [jobs, setJobList] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getJobById(id)
      .then(jobList => {
        setJobList(jobList)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [])

  console.log(jobs)
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
