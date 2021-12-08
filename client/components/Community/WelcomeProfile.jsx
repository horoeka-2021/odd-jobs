import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeProfile ({ data }) {
  return (
    <div className="margin-bot pb-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-3">Welcome to the InfoHub, <span className='text-neutral font-bold text-5xl'>{data.name}!</span></h1>
        <h2 className="text-2xl font-semibold text-center">The latest news and updates from the OddJobs Community</h2>
        <div><img src="../img/customercare.png" className="max-w-xl mx-auto my-auto"/></div>
        <br></br>
        <h4 className="text-5xl font-bold text-center mb-3">Here you will find:</h4>
        <br />
        <h4 className="text-2xl font-semibold text-center">Your OddNews</h4>
        <br />
        <h4 className="text-2xl font-semibold text-center">This Weeks Featured OddJob</h4>
        <br />
        <h4 className="text-2xl font-semibold text-center">Whats Happening in Your Area</h4>
        <br />
        <p className="text-center leading-loose break-words">Start here to help grow the OddJobs community!</p>
        <div className="help-nav mt-20 mr-32 my-auto">
          <Link to='/member/addjob' className="px-4 py-3 text-xl
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-900">Add an OddJob</Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomeProfile
