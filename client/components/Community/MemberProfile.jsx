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
            <Link to={`${url}/${state.id}`}>My Profile</Link>
          </li>
          <li>
            <Link to={`${url}`}>Listed Jobs</Link>
          </li>
        </ul>
      </div>

      <div>
        <h1>Member page</h1>
        {/* <ProfileItem data={profile}/>
      <JobListItem jobs={jobs}/> */}
        {/* <button><Link to='/jobs/new'>Add New Job</Link></button> */}

        <Route exact path={path} >
          <JobListItem jobs={jobs}/>
          <ProfileItem data={profile}/>

        </Route>
        <Route path={`${path}/:name`}>
        </Route>

      </div>

    </>
  )
}

export default MemberProfile
