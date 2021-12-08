import React, { useState, useEffect } from 'react'
import JobListItem from './JobListItem'
import { getJobById } from '../../api/jobs'

function Jobs (props) {
  const { userID } = props
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
        // eslint-disable-next-line no-console
        console.error(err)
        return false
      })
  }, [])
  // console.log('joblist api', jobList)
  return (
    <>
      {jobList.length === 0 ? <div className="m-10">
        <h1 className='text-lg font-mono medium text-blue-300'>No Job listed</h1> </div>
        : <div className="pb-8">
          <h1 className="mb-4">You have listed {jobList.length} jobs</h1>
          <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52">
            <span id="my-drawer-2"className="drawer-toggle" > </span>

            <div className="drawer-side ">
              {jobList.map((data, index) => (

                <div key={data.jobsId} tabIndex={index} className="menu self-center p-2 m-4 w-80 bg-base-100 text-base-content ">
                  {/* <div className="collapse-title text-m font-medium"> */}

                  <button className="text-left" onClick={() => handleDetail(data.jobsId)}>{data.jobsId} - {data.jobsTitle}</button>

                </div>

              ))}
            </div>

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
