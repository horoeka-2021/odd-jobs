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
  return (
    <>
      {jobList.length === 0 ? <div className="m-10">
        <h1 className='text-lg font-mono medium text-blue-300'>No Job listed</h1> </div>
        : <div className="pb-8 mb-40">
          <h1><span style={{ fontSize: '38px' }}>YOUR JOBS</span></h1> <br />
          <h1 className="mb-4"><span style={{ fontSize: '24px' }}>You have listed {jobList.length} jobs</span></h1>
          <div className="rounded-lg shadow bg-base-1000 drawer drawer-mobile h-900">
            <span id="my-drawer-2" className="drawer-toggle" > </span>

            <div className="drawer-side ">
              <ol>
                {jobList.map((data, index) => (

                  <li key={data.jobsId} tabIndex={index} className="menu self-center m-2 p-2 w-80 bg-base-100 text-base-content ">
                    {/* <div className="collapse-title text-m font-medium"> */}

                    <button className="text-left" onClick={() => handleDetail(data.jobsId)}>{data.jobsTitle}</button>

                  </li>

                ))}
              </ol>
            </div>

            <ul className="drawer-content ">
              {showDetail &&
                <li><JobListItem jobID={jobID} /></li>
              }
            </ul>

          </div>
        </div>
      }
    </>
  )
}

export default Jobs
