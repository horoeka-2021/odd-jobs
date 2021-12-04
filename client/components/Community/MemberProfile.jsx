import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import JobListItem from '../Jobs/JobListItem'
import ProfileItem from '../Profile/ProfileItem'
import { getJobById } from '../../api/jobs'

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
        <span>My Profile</span>
        <span>Job list</span>
      </div>
      {profile &&
    <div>
      <h1>Member page</h1>
      <ProfileItem data={profile}/>
      <JobListItem jobs={jobs}/>
    </div>
      }
    </>
  )
}

export default MemberProfile
