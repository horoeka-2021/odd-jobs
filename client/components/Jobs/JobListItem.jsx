import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { getJobDetailById } from '../../api/jobs'

function JobListItem ({ jobID }) {
  const [jobDetail, setJobDetail] = useState([])
  console.log('Job ID pass in', jobID)
  // api called detail
  useEffect(() => {
    getJobDetailById(jobID)
      .then(data => {
        setJobDetail(data)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [])
  console.log('detail', jobDetail)

  return (

    <div >
      <h1>{jobDetail.Title}</h1>
      <h1>{jobDetail.jobDescription}</h1>
      {/* <h1>{jobDetail.jobPaid === 0 ? Paid : Koha}</h1> */}

      <button>Edit</button>
      <button>Delete</button>
    </div>

  )
}

export default JobListItem
