import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'

// import JobListItem from '../Jobs/JobListItem'
import JobList from '../Jobs/JobList'
import ProfileItem from '../Profile/ProfileItem'
import AddJob from '../Form/AddJob'
import { getJobById } from '../../api/jobs'

import { fetchProfile } from '../../actions/profiles'

function MemberProfile (props) {
  const { history } = props
  const { path, url } = useRouteMatch()
  const state = useSelector(state => state)
  const profiles = state.profiles
  const auth0Id = state.user.auth0Id

  const dispatch = useDispatch()

  const [profile, setProfile] = useState([])
  const [jobs, setJobList] = useState([])

  useEffect(() => {
    console.log('member-useEffect', auth0Id)
    // check if the user has community member profile
    dispatch(fetchProfile(auth0Id, history))
    // if no profile returns ==> move to member creation page

    // if there is member profile ==> get job list

    setProfile(profiles)
    // console.log('setProfile --', profile)
    getJobById(profiles.id)
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
        <Route path={'/member/myprofile'}>
          <ProfileItem data={profile}/>
        </Route>
        <Route path={'/member/addjob'} >
          <AddJob userID={profiles.id} history={history}/>
        </Route>
      </div>

    </>
  )
}

export default MemberProfile
