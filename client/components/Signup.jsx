import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { IfNotAuthenticated } from './Auth0/Authenticated'

function Signup () {
  const { loginWithRedirect } = useAuth0()

  function handleLogIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div>
      <IfNotAuthenticated>
        <div>
          <h3>REGISTERED CUSTOMERS</h3>
          <p>If you are registered user, please log in</p>
          <button onClick={handleLogIn}>LOGIN</button>
        </div>
        <div>
          <h3>NEW USER</h3>
          <p>
            If you are new to Odd Jobs you can register for an account below.</p>
          <button onClick={handleLogIn}>SIGN UP!</button>
        </div>
      </IfNotAuthenticated>
    </div>
  )
}

export default Signup
