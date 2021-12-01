import React from 'react'
import { Link } from 'react-router-dom'

function Community () {
  return (
    <div>
     Comunity Memeber page
      <Link to='/job/new'><button>Add New Job</button></Link>
    </div>
  )
}

export default Community
