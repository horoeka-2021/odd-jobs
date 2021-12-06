import React, { useState } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'

import JobListItem from './JobListItem'

function Jobs (props) {
  const { path, url } = useRouteMatch()
  const { jobs, userID } = props
  console.log('job list', path)
  console.log('joblist', jobs, userID) // memebr
  const [showDetail, setShowDetail] = useState(false)

  //   function handleDetail () {
  //     // console.log('show')
  //     // setShowDetail(true)
  //   }
  /// get by user
  // all job unde this user - 4
  // id to id

  return (

    <div className="listing-tab">
      <h3 className="text-2xl">You have listed {jobs.length} jobs</h3>

      {jobs.map((data, index) => {
        return (
          <div key={data.jobsId} tabIndex={index} className="collapse w-96 border rounded-box border-base-300">
            <div className="collapse-title text-m font-medium">
              {data.jobsId} - {data.jobsTitle}
            </div>

            <div className="collapse-content">
              <p><button>More Details</button></p>
            </div>
          </div>
        )
      })}

      {/* <div>
        { showDetail &&
        <JobListItem />
        }
      </div> */}

    </div>
  )
}

export default Jobs
