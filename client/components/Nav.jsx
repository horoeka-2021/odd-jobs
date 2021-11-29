import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav () {
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogOff (e) {
    e.preventDefault()
    logout()
  }

  function handleLogIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div>
      <Link to='/' className='nav-button'>Home</Link>
      <IfAuthenticated>
        <Link to='/' className='nav-button' onClick={handleLogOff}>Log off</Link>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to='/' className='nav-button' onClick={handleLogIn}>Log in</Link>
      </IfNotAuthenticated>
    </div>
  )
}

export default Nav
