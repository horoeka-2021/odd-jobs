import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import JobListItem from '../Jobs/JobListItem'
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
          <JobListItem jobs={jobs} />
        </Route>
        <Route path={`/members/${state.id}/myprofile`}>
          <ProfileItem data={profile}/>
        </Route>
        <Route path={`/members/${state.id}/addjob`} >
          <AddJob userID={state.id} history={history}/>
        </Route>

      </div>
    </>
  )
}

export default MemberProfile
