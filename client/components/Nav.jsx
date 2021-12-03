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
    <div className="navbar mb-2 bg-red-200 text-neutral-content">
      <div className="flex-none pr-4 pl-2 mx-2">
        <img className="max-h-24" src="../img/oddjob_400_200px.png" />
        <div className="flex-row px-2 mx-40">
          <div className="items-stretch hidden lg:flex">
            <Link to='/' className="btn btn-ghost text-gray-600 btn-sm rounded-btn font-sans mx-2">Home</Link>
            <Link to='/' className="btn btn-ghost  text-gray-600 btn-sm rounded-btn font-sans mx-2">Our Story</Link>
            <Link to='/' className="btn btn-ghost text-gray-600 btn-sm rounded-btn font-sans mx-2">Hire Now</Link>
            <Link to='/jobs' className="btn btn-ghost text-gray-600 btn-sm rounded-btn font-sans mx-2">Find Jobs</Link>
          </div>
        </div>
        <div className="flex-row content-end lg:flex align">
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
