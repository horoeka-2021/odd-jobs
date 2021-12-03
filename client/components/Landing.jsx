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
<<<<<<< HEAD
    <div className="flex mb-4">
      <div className="w-5/12 bg-gray-400 p-5">
        <h2 className="text-5xl font-weight: 700 font-bold">Get the Job</h2>
        <h2 className="text-5xl font-weight: 700 font-bold">Done In A Day</h2>
        <h3>
              Gain experience and be mentored by the best
              in the industry. Start your training, make
              a difference, and enhance your skills today!
        </h3>
        <div className="w-3/4 grid grid-cols-2 pt-5 pb-10 bg-blue-200">
          <div>
            <h3>APPRENTICE</h3>
            <p>Prove your capability and skill and get the job done</p>
            <Link to='/apprentice'>
              <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">GET STARTED</button>
            </Link>
          </div>
          <div>
            <h3>COMMUNITY MEMBER</h3>
            <p>Post your requirements and match it with the right one</p>
            <Link to='/member'>
              <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">GET STARTED</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end">
        <img className="construct-image" src="../img/construction.gif" />
      </div>
||||||| 917bcbe
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

      <Link to='/apprentice'><button>Apprentices</button></Link>
      <Link to='/member'><button>Community Member</button></Link>

=======
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

>>>>>>> dev
    </div>

  )
}

export default Landing
