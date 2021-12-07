import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, useRouteMatch } from 'react-router-dom'

// import JobListItem from '../Jobs/JobListItem'
import JobList from '../Jobs/JobList'
import ProfileItem from '../Profile/ProfileItem'
import AddJob from '../Form/AddJob'
import { getJobById } from '../../api/jobs'

import { fetchProfile } from '../../actions/profiles'
import WelcomeProfile from './WelcomeProfile'

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

    // setProfile(profile)
  }, [])

  getJobById(profiles.id)
    .then(jobList => {
      setJobList(jobList)
      return null
    })
    .catch(err => {
      console.error(err)
      return false
    })

    
  // console.log('landing', state.user.auth0Id)
  console.log('member profiles', profiles)

  return (
    <>
      <div className="container mx-auto artboard artboard-demo">
        <div className="py-4 bg-white float-left w-full">
          <ul className="menu items-stretch horizontal">
            <li className="bordered">
              <Link className="font-sans" to={`${url}`}>INFO</Link>
            </li>
            <li className="bordered">
              <Link className="font-sans" to={`${url}/myprofile`}>MY PROFILE</Link>
            </li>
            <li className="bordered">
              <Link className="font-sans" to={`${url}/joblist`}>LISTED JOBS</Link>
            </li>
            <li className="bordered">
              <Link className="font-sans"to={`${url}/addjob`}>ADD NEW JOB</Link>
            </li>
          </ul>
        </div>

        <div className="flex self-start mb-4 pl-36 ml-12 text-l breadcrumbs">
          <ul>
            <li className=" text-indigo-500 flex-3 h-12 text-m font-sans">COMMUNITY MEMBER</li>
            <li className=" text-indigo-500 flex-2 h-12 text-m font-sans underline">You are now logged in</li>
          </ul>
        </div>
        <div>
          <Route exact path={path} >
            <WelcomeProfile data={profiles}/>
          </Route>
          <Route path={`${path}/joblist`} >
            <JobList jobs={jobs} userID={profiles.id}/>
          </Route>
          <Route path={'/member/myprofile'}>
            <ProfileItem data={profiles}/>
          </Route>
          <Route path={`${path}/addjob`} >
            <AddJob userID={profiles.id} history={history}/>
          </Route>

        </div>
      </div>
    </>
  )
}

export default MemberProfile
