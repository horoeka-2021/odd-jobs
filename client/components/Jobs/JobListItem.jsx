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
        // eslint-disable-next-line no-console
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

          <h1><span style={{ fontSize: '32px' }}>JOB DETAILS</span></h1> <br />

          <div className="pt-5"></div>
          <table>
            <tbody>
              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold py-3 px-3">Job Title:</td>
                <td>{jobTitle}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Job Description:</td>
                <td>{jobDescription}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Location:</td>
                <td>{locationName}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Type of Service:</td>
                <td>{serviceTypeName}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Type of Payment:</td>
                <td>{jobPaid === 0 ? 'Paid' : jobPaid === 1 ? 'Koha' : 'Not Specified'}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Job Starts:</td>
                <td>{jobExpectedStart}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Job Ends:</td>
                <td>{jobExpectedEnd}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Date Created:</td>
                <td>{jobCreatedDate}</td>
              </tr>

              <tr className="pb-3">
                <td className="uppercase text-indigo-600 font-semibold pb-3 px-3">Job Status:</td>
                <td>{jobStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex justify-end my-4 mr-5'>
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
          <h1><span style={{ fontSize: '32px' }}>APPLICATIONS</span></h1> <br />
          <ul className="w-4/5 leading-snug text-justify joblist-head">
            <li className="text-s font-semibold mb-3">Applicant ID: <span className='text-green-500'>{applicant.id ?? 'None'} </span></li>
            <li className="text-s font-semibold mb-3">Applicant: <span className='text-green-500'>{applicant.usersName ?? '-'} </span></li>
            <li className="text-s font-semibold mb-3">STATUS: <span className='text-green-500'>{applicant.applicationStatus ?? 'N/A'} </span>
            </li>
          </ul>
          <div className="pt-5"></div>
          <table>
            <tbody>
            </tbody>
          </table>
        </div>

        <div className='flex justify-end my-4 mr-5'>
          <i className="fas fa-hand-paper"></i><button className="p-1.5 capitalized
          text-indigo-600 font-semibold">ACCEPT</button>
          <i className="fas fa-times-circle"></i><button className="p-1.5 capitalized
          text-indigo-600 font-semibold">DECLINE</button>
        </div>
        {/* <p>{jobPaid == 0 ? Paid : Koha}</p> */}
      </div>
    </>

  )
}

export default JobListItem
