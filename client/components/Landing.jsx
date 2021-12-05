import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProfile } from '../actions/profiles'
import { useAuth0 } from '@auth0/auth0-react'

function Landing (props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const redirectUri = `${window.location.origin}/member`
  const state = useSelector(state => state)
  const auth0Id = state.user.auth0Id

  const dispatch = useDispatch()
  const { history } = props

  function checkProfile () {
    dispatch(fetchProfile(auth0Id, history))
  }

  function handleMember () {
    // check if logged in Auth0 or not
    if (!isAuthenticated) {
      loginWithRedirect({
        redirect_uri: redirectUri
      })
    } else {
      checkProfile()
    }
  }
  console.log('landing', state.user.auth0Id)

  return (

    <div className="flex mb-4">
      <div className="w-5/12 pl-10 pr-10 pt-10 mx-20">
        <h2 className="text-5xl font-weight: 700 font-bold">Get the Job</h2>
        <h2 className="text-5xl font-weight: 700 font-bold">Done In A Day</h2>
        <p className="text-justify leading-tight w-4/5 pt-3">
              Gain experience and be mentored by the best
              in the industry.Start your training, make
              a difference, and enhance your skills today!
        </p>
        <div className="w-full grid grid-cols-2 gap-2 pt-10 pb-5">
          <div className="w-44">
            <h3 className="text-xl font-weight: 700 font-bold">APPRENTICE</h3>
            <p className="leading-tight">Prove your capability and skill and get the job done</p>

          </div>

          <div>
            <h3 className="text-xl font-weight: 700 font-bold">COMMUNITY MEMBER</h3>
            <p className="leading-tight">Post your requirements and match it with the right one</p><br></br>
          </div>

          <div className="flex items-baseline">
            <Link to='/apprentice/new'>
              <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">GET STARTED</button>
            </Link>
          </div>

          <div className="flex items-baseline">
            <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600" onClick={handleMember}>GET STARTED</button>
          </div>

        </div>
      </div>
      <div className="mx-10 flex flex-col justify-end items-end">
        <img className="construct-image" src="../img/construction.gif" />
      </div>
    </div>

  )
}

export default Landing
