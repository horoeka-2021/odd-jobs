import React, { useState } from 'react'
import JobListItem from './JobListItem'

function Jobs (props) {
  // const { path } = useRouteMatch()
  const { jobs } = props
  // console.log('job list', path)
  // console.log('joblist', jobs) // memebr
  const [showDetail, setShowDetail] = useState(false)
  const [jobID, setJobId] = useState('')

  function handleDetail (jobID) {
    setJobId(jobID)
    setShowDetail(true)
  }

  return (

    <div className="listing-tab">
      <h3 className="text-2xl">You have listed {jobs.length} jobs</h3>

      {jobs.map((data, index) => {
        return (

          <div key={data.jobsId} tabIndex={index} className="collapse w-96 border rounded-box border-base-300">
            <div className="collapse-title text-m font-medium">

              <button onClick={() => handleDetail(data.jobsId)}>{data.jobsId} - {data.jobsTitle}</button>
            </div>
          </div>

        )
      })}

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
