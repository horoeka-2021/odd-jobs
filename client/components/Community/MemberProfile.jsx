import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import JobListItem from '../Jobs/JobListItem'
import ProfileItem from '../Profile/ProfileItem'

function MemberProfile () {
  const profiles = useSelector(state => state.profiles)

  return (
    <div>
      <h1>Member page</h1>
      <Link to='/job/new'><button>Add New Job</button></Link>
      <ProfileItem profiles={profiles}/>

      <JobListItem />
    </div>
  )
}

export default MemberProfile
