import React from 'react'
import { Link } from 'react-router-dom'

function MemberProfile () {
  return (
    <div>
      <h1>Memeber page</h1>
      <Link to='/job/new'><button>Add New Job</button></Link>

      <div>
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Location</p>

      </div>

      {/* job list for memeber id */}
      <div>
        <p>jobList</p>
      </div>
    </div>
  )
}

export default MemberProfile
