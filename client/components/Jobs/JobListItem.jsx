import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { getJobDetailById } from '../../api/jobs'

function JobListItem ({ jobID }) {
  const [jobDetail, setJobDetail] = useState({})
  console.log('Job ID pass in', jobID)
  // api called detail
  useEffect(() => {
    getJobDetailById(jobID)
      .then(data => {
        console.log('api', data)
        setJobDetail(data)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [jobID])

  const {
    jobCreatedDate, jobDescription, jobExpectedEnd,
    jobExpectedStart, jobPaid, jobStatus, jobTitle, locationName, serviceTypeName
  } = jobDetail

  const payment = ['Paid', 'Koha']

  return (

    <div >

      <p>{jobCreatedDate}</p>
      <p>{jobStatus}</p>

      <ul>
        <li>{jobTitle}</li>
        <li>{jobDescription}</li>
        <li>{locationName}</li>
        <li>{serviceTypeName}</li>
        <li>{payment[jobPaid]}</li>
        <li>{jobExpectedStart}</li>
        <li>{jobExpectedEnd}</li>
      </ul>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      {/* <p>{jobPaid == 0 ? Paid : Koha}</p> */}
    </div>

  )
}

export default JobListItem
