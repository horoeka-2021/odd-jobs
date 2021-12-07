import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { getJobDetailById } from '../../api/jobs'

function JobListItem ({ jobID }) {
  const [jobDetail, setJobDetail] = useState({})
  // console.log('Job ID pass in', jobID)
  // api called detail
  useEffect(() => {
    getJobDetailById(jobID)
      .then(data => {
        // console.log('api', data)
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

  // const payment = ['Paid', 'Koha']

  return (

    < >
      <label htmlFor="my-drawer-2" className="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label>
      <p>{jobCreatedDate}</p>
      <p>{jobStatus}</p>

      <div className=" text-xs text-center lg:block">
        <p >{jobTitle}</p>
        <p>{jobDescription}</p>
        <p>{locationName}</p>
        <p>{serviceTypeName}</p>
        <p>{jobPaid === 0 ? 'Paid' : jobPaid === 1 ? 'Koha' : 'Not Specified'} </p>
        <p>{jobExpectedStart}</p>
        <p>{jobExpectedEnd}</p>
      </div>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      {/* <p>{jobPaid == 0 ? Paid : Koha}</p> */}
    </>

  )
}

export default JobListItem
