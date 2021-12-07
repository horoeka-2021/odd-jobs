import React, { useState, useEffect } from 'react'
import JobListItem from './JobListItem'
import { getJobById } from '../../api/jobs'

function Jobs (props) {
  const { jobs, userID } = props
  const [showDetail, setShowDetail] = useState(false)
  const [jobList, setJobList] = useState([])
  const [jobID, setJobId] = useState('')

  function handleDetail (jobID) {
    setJobId(jobID)
    setShowDetail(true)
  }
  useEffect(() => {
    getJobById(userID)
      .then(jobList => {
        setJobList(jobList)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [])

  return (

    <div className="listing-tab">
      <h3 className="text-2xl">You have listed {jobs.length} jobs</h3>

      {jobList.map((data, index) => (

        <div key={data.jobsId} tabIndex={index} className="collapse w-96 border rounded-box border-base-300">
          <div className="collapse-title text-m font-medium">

            <button onClick={() => handleDetail(data.jobsId)}>{data.jobsId} - {data.jobsTitle}</button>
          </div>
        </div>

      ))}

      {/* <Route exact path={`${path}/details`} >
        <JobListItem jobID={jobs.jobsID} />
      </Route> */}

      <div>
        { showDetail &&
        <JobListItem jobID={jobID}/>
        }
      </div>

    </div>
  )
}

export default Jobs
