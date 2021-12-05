import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'

// import JobListItem from '../Jobs/JobListItem'
import JobList from '../Jobs/JobList'
import ProfileItem from '../Profile/ProfileItem'
import AddJob from '../Form/AddJob'
import { getJobById } from '../../api/jobs'

function MemberProfile (props) {
  const { history } = props
  const { path, url } = useRouteMatch()
  const state = useSelector(state => state.profiles)

  const [profile, setProfile] = useState([])
  const [jobs, setJobList] = useState([])

  useEffect(() => {
    setProfile(state)
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

  return (
    <>

      <div>
        <ul>
          <li>
            <Link to={`${url}/myprofile`}>My Profile</Link>
          </li>
          <li>
            <Link to={`${url}`}>Listed Jobs</Link>
          </li>
          <li>
            <Link to={`${url}/addjob`}>Add New Job</Link>
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

    </>
  )
}

export default MemberProfile
