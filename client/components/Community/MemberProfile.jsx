import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'
// import JobListItem from '../Jobs/JobListItem'
import JobList from '../Jobs/JobList'
import ProfileItem from '../Profile/ProfileItem'
import { getJobById } from '../../api/jobs'
import AddJob from '../Form/AddJob'

function MemberProfile (props) {
  const { history } = props
  const [profile, setProfile] = useState([])
  const [jobs, setJobList] = useState([])
  const { path, url } = useRouteMatch()
  const state = useSelector(state => state.profiles)

  useEffect(() => {
    setProfile(state)
    // console.log('setProfile --', profile)
    getJobById(state.id)
      .then(jobList => {
        setJobList(jobList)
        return null
      })
      .catch(err => {
        console.error(err)
        return false
      })
  }, [])

  console.log(state)
  return (
    <>
      <div className="container mx-auto artboard artboard-demo">
        <div className="py-4 bg-white">
          <ul className="menu items-stretch pr-96 mr-32 horizontal">
            <li className="visited:bordered active:bordered">
              <Link className="font-sans" to={`${url}/myprofile`}>MY PROFILE</Link>
            </li>
            <li className="visited:bg-base-200">
              <Link className="font-sans" to={`${url}`}>LISTED JOBS</Link>
            </li>
            <li className="visited:bordered active:bordered">
              <Link className="font-sans"to={`${url}/addjob`}>ADD NEW JOB</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1>Member page</h1>
          <h2>You are now logged in</h2>

          <Route exact path={path} >
            {/* <JobListItem jobs={jobs} /> */}
            <JobList jobs={jobs}/>
          </Route>
          <Route path={'/members/myprofile'}>
            <ProfileItem data={profile}/>
          </Route>
          <Route path={'/members/addjob'} >
            <AddJob userID={state.id} history={history}/>
          </Route>

        </div>
      </div>
    </>
  )
}

export default MemberProfile
