import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Auth0/Authenticated'

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
    <div className="navbar mb-2 bg-white text-neutral-content w-full">
      <div className="flex flex-row w-full">
        <div className="px-15">
          <img className="max-h-24" src="../img/oddjob_400_200px.png" />
        </div>
        <div className="flex flex-1 content-between justify-evenly">
          <Link to='/' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2">Home</Link>
          <Link to='/' className="btn btn-ghost  text-gray-600 btn-m rounded-btn font-sans mx-2">Our Story</Link>
          <Link to='/' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2">Hire Now</Link>
          <Link to='/jobs' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2">Find Jobs</Link>
        </div>
        <div className="flex flex-row items-end">
          <IfAuthenticated>
            <Link to='/' className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600" onClick={handleLogOff}>Log off</Link>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to='/' className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600" onClick={handleLogIn}>Log in</Link>
          </IfNotAuthenticated>
        </div>
      </div>
    </div>

  )
}

export default Nav
