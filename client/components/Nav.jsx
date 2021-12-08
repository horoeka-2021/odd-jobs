import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Auth0/Authenticated'

function Nav () {
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogOff (e) {
    e.preventDefault()
    logout({
      returnTo: window.location.origin
    })
  }

  function handleLogIn (e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div className="flex justify-center ml-auto mr-auto max-w-screen-2xl">
      <div className="navbar mb-2 bg-white text-neutral-content min-w-full">
        <div className="flex justify-space-between w-full">
          <div className="px-15">
            <Link to='/'>
              <img className="max-h-24" src="../img/oddjob_400_200px.png" />
            </Link>
          </div>
          <div className="flex flex-1 content-between justify-end">
            <Link to='/' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2">Home</Link>
            <Link to='/ourstorys' className="btn btn-ghost  text-gray-600 btn-m rounded-btn font-sans mx-2">Our Story</Link>
            <IfNotAuthenticated>
              <Link to='/signup' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2" >Hire Now</Link>
              <Link to='/signup' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2">Find Jobs</Link>
            </IfNotAuthenticated>
            <IfAuthenticated>
              <Link to='/member' className="btn btn-ghost text-gray-600 btn-m rounded-btn font-sans mx-2">My Profile</Link>
            </IfAuthenticated>
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
    </div>

  )
}

export default Nav
