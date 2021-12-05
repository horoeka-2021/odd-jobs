import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProfile } from '../actions/profiles'
import { useAuth0 } from '@auth0/auth0-react'

function Landing (props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const redirectUri = `${window.location.origin}/member/new`
  const state = useSelector(state => state)
  const auth0Id = state.user.auth0Id

  console.log('landing', state.user.auth0Id)
  const dispatch = useDispatch()
  const { history } = props

  function checkProfile () {
    dispatch(fetchProfile(auth0Id, history))
  }

  function handleMember () {
    // check if logged in Auth0 or not
    if (!isAuthenticated) {
      loginWithRedirect({
        // redirect_uri: redirectUri
      })
    } else {
      checkProfile()
    }
  }

  return (

    <div className="flex mb-4">
      <div className="w-5/12 pl-10 pr-10 pt-10 mx-20">
        <h2 className="text-5xl font-weight: 700 font-bold">E tautoko ana tātou i</h2>
        <h2 className="text-5xl font-weight: 700 font-bold">te Roopū Odd Jobs!</h2>
        <p className="text-left leading-tight w-4/5 pt-3">
        We stand by an ethos of building whanau who help fresh local talent gain
        skills and experience through koha and gifting.<br></br><br></br>
        Odd Jobs will link you to local juniors and up and coming skilled workers
        within the trade and service fields.
        </p>
        <div className="w-full grid grid-cols-2 gap-2 pt-10 pb-5">
          <div className="w-44">
            <h3 className="text-xl font-weight: 700 font-bold">APPRENTICE</h3>
            <p className="leading-tight">Current Apprentice or Junior in your field?</p>

          </div>

          <div>
            <h3 className="text-xl font-weight: 700 font-bold">COMMUNITY MEMBER</h3>
            <p className="leading-tight">Have an odd job you need help with?</p><br></br>
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
