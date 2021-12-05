import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// Api call
import { getJobById } from '../../api/jobs'
import { fetchProfile } from '../../actions/profiles'

// component
import AddJob from '../Form/AddJob'
import JobList from '../Jobs/JobList'
import ProfileItem from '../Profile/ProfileItem'

function MemberProfile (props) {
  const { history } = props
  const { path, url } = useRouteMatch()
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const state = useSelector(state => state)
  const auth0Id = state.user.auth0Id
  const dispatch = useDispatch()
  // const redirectUri = `${window.location.origin}`
  // const [profile, setProfile] = useState([])
  const [jobs, setJobList] = useState([])

  useEffect(() => {
    // get the member job list
    if (!isAuthenticated) {
      loginWithRedirect({

      })
    } else {
      dispatch(fetchProfile(auth0Id, history))

      getJobById(state.profiles.id)
        .then(jobList => {
          setJobList(jobList)
          return null
        })
        .catch(err => {
          console.error(err)
          return false
        })
    }
  }, [])

  console.log('api', state.profiles)
  /// verifiy 1. login  2.preexisting profile
  // const redirectUri = `${window.location.origin}/#/member`

  // function checkProfile () {

  // }

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
          <ProfileItem data={state.profiles}/>
        </Route>
        <Route path={'/members/addjob'} >
          <AddJob userID={state.profiles.id} history={history}/>
        </Route>

      </div>
    </>
  )
}

export default MemberProfile
