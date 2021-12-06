import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// api called detail

function JobListItem () {
  const [job, setJob] = useState([])

  // useEffect(() => {
  //   getJobByUserID(id)
  //     .then(data => {
  //       setJob(data)
  //       return null
  //     })
  //     .catch(err => {
  //       console.error(err)
  //       return false
  //     })
  // }, [])

  return (
    <div>
      {/* {job.map((jobs) => {
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
      })} */}
      <h1>job list item wehqjekhwehqwkjehqwh</h1>

    </div>

  )
}

export default JobListItem
