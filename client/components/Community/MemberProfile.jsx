import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

function MemberProfile () {
  const [members, setMember] = useState([])

  return (
    <div>
      <h1>Member page</h1>
      <Link to='/job/new'><button>Add New Job</button></Link>
      {/*
      {members.map(member => (
        <div key={member.id}>
          <p>{member.name}</p>
          <p>{member.email}</p>
          <p>{member.phone}</p>
        </div>

      ))} */}

    </div>
  )
}

export default MemberProfile
