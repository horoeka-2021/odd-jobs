import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { getJobDetailById } from '../../api/jobs'

function JobListItem ({ jobID }) {
  const [jobDetail, setJobDetail] = useState({})
  const [applicant, setApplicant] = useState([])

  useEffect(() => {
    getJobDetailById(jobID)
      .then(data => {
        // console.log('api', data)
        setJobDetail(data)
        setApplicant(data.applicants[0] ?? {})

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

  return (

    < >
      <div className="joblists-items">
        <label htmlFor="my-drawer" className="mx-auto btn btn-primary drawer-button lg:hidden">
        </label>

        <div className=" text-s text-left w-full pt-5">
          <ul className="w-4/5 leading-snug text-justify joblist-head">
            <li className="text-s font-semibold">DATE: <span className="text-gray-400">{jobCreatedDate}</span></li>
            <li className="text-s font-semibold ">STATUS:
              <i className="fas fa-circle"></i><span className="text-gray-400">{jobStatus}</span>
            </li>
          </ul>
          <div className="pt-5"></div>
          <table>
            <tbody>
              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Job Title:</td>
                <td>{jobTitle}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Job Description:</td>
                <td>{jobDescription}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Location:</td>
                <td>{locationName}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Type of Service:</td>
                <td>{serviceTypeName}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Type of Payment:</td>
                <td>{jobPaid === 0 ? 'Paid' : jobPaid === 1 ? 'Koha' : 'Not Specified'}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Job Starts:</td>
                <td>{jobExpectedStart}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold">Job Ends:</td>
                <td>{jobExpectedEnd}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <i className="fas fa-edit"></i><button className="p-1.5 capitalized
          text-indigo-600 font-semibold">EDIT</button>
          <i className="fas fa-trash-alt"></i><button className="p-1.5 capitalized
          text-indigo-600 font-semibold">DELETE</button>
        </div>
        {/* <p>{jobPaid == 0 ? Paid : Koha}</p> */}
      </div>

      <div className="joblists-items">
        <label htmlFor="my-drawer" className="mx-auto btn btn-primary drawer-button lg:hidden">
        </label>

        <div className=" text-s text-left w-full pt-5">
          <ul className="w-4/5 leading-snug text-justify joblist-head">
            <li className="text-s font-semibold">Applicant ID: <span className='text-green-500'>{applicant.id ?? 'None'} </span></li>
            <li className="text-s font-semibold">Applicant: <span className='text-green-500'>{applicant.usersName ?? '-'} </span></li>
            <li className="text-s font-semibold ">STATUS: <span className='text-green-500'>{applicant.applicationStatus ?? 'N/A'} </span>
            </li>
          </ul>
          <div className="pt-5"></div>
          <table>
            <tbody>
            </tbody>
          </table>
        </div>

        <div>
          <i className="fas fa-edit"></i><button className="p-1.5 capitalized
          text-indigo-600 font-semibold">ACCEPT</button>
          <i className="fas fa-trash-alt"></i><button className="p-1.5 capitalized
          text-indigo-600 font-semibold">DECLINE</button>
        </div>
        {/* <p>{jobPaid == 0 ? Paid : Koha}</p> */}
      </div>
    </>

  )
}

export default JobListItem
