import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom'
import JobListItem from '../Jobs/JobListItem'
import ProfileItem from '../Profile/ProfileItem'
import { getJobById } from '../../api/jobs'
import AddJob from '../Form/AddJob'

function MemberProfile (props) {
  // const { children, history } = props
  const [profile, setProfile] = useState([])
  const [jobs, setJobList] = useState([])
  const { path, url } = useRouteMatch()
  console.log('route match', path, url)
  const state = useSelector(state => state.profiles)

  useEffect(() => {
    setProfile(state)
    // console.log('setProfile --', profile)
    getJobById(state.id)
      .then(jobList => {
        console.log('api', jobList)
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
            {/* <Link to={`${url}/${state.id}`}>My Profile</Link> */}
            <Link to="/members/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to={`${url}`}>Listed Jobs</Link>
          </li>
          <li>
            <Link to="/members/addjobs">Add New Job2</Link>
          </li>
        </ul>
      </div>

      <div>
        <h1>Member page</h1>

        <Route exact path={path} >
          <JobListItem jobs={jobs}/>
        </Route>
        <Route path="/members/myprofile">
          <ProfileItem data={profile}/>
        </Route>
        <Route path="/members/addjobs">
          <AddJob />
        </Route>

      </div>
    </>
  )
}

export default MemberProfile
