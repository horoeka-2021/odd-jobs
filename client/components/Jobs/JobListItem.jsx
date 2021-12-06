import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { getJobDetailById } from '../../api/jobs'

function JobListItem ({ jobID }) {
  const [jobDetail, setJobDetail] = useState([])

  // api called detail
  useEffect(() => {
    getJobDetailById(jobID)
      .then(data => {
        console.log(data)
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
      <p>{jobDetail.Title}</p>

      <button>Edit</button>
      <button>Delete</button>
    </div>

  )
}

export default JobListItem
