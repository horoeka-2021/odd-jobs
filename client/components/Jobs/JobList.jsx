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
  console.log('joblist api', jobList)
  return (
    <>
      {jobList.length === 0 ? <div className="m-10">
        <h1 className='text-lg font-mono medium text-blue-300'>No Job listed</h1> </div>
        : <div className="pb-8">
          <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" placeholder="drawer-toggle"/>

            <div className="drawer-side">
              <h3 className="drawer-overlay">You have listed {jobs.length} jobs</h3>

              {jobList.map((data, index) => (

                <ul key={data.jobsId} tabIndex={index} className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                  {/* <div className="collapse-title text-m font-medium"> */}

                  <li><button className="text-left" onClick={() => handleDetail(data.jobsId)}>{data.jobsId} - {data.jobsTitle}</button></li>
                  {/* </div> */}
                </ul>

              ))}
            </div>

            {/* <Route exact path={`${path}/details`} >
        <JobListItem jobID={jobs.jobsID} />
      </Route> */}

            <ul className="drawer-content">
              { showDetail &&
        <li><JobListItem jobID={jobID}/></li>
              }
            </ul>

          </div>
        </div>
      }
    </>
  )
}

export default Jobs
