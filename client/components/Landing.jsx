import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProfile } from '../actions/profiles'
import { useAuth0 } from '@auth0/auth0-react'

function Landing (props) {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const redirectUri = `${window.location.origin}` // /member/new
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  function handleMember () {
    // check if logged in or not
    if (!isAuthenticated) {
      loginWithRedirect({
        redirectUri
      })
    } else {
      console.log(state.user.auth0Id)
      const auth0Id = state.user.auth0Id
      dispatch(fetchProfile(auth0Id))
    }
  }

  return (
    <div>
      <h1>New Zealand&#39;s leading odd jobs platform for local community</h1>
      <h2>Connect with people to get the job done on odd Jobs</h2>
      <h3>Get Started Now</h3>

      <p>Want your home cleaned or furniture put together? Just tell us about the task you’d like done, suggest a fair budget for a job well done and you’ll start to receive offers from available Taskers.</p>

      <h3>How does Odd Jobs work?</h3>
      <ul>
        <li>Post your Task</li>
        <ul><li>Tell us what you need. Its FREE to post!</li></ul>
        <li>Review offers</li>
        <ul><li>Get offers from Apprentice memebr and view profiles</li></ul>
        <li>Get it done</li>
        <ul><li>Choose the right person for your task and get it done</li></ul>

      </ul>

      <Link to='/apprentice/new'><button>Apprentices</button></Link>
      <button onClick={handleMember}> Community Member</button>

    </div>
  )
}

export default Landing
