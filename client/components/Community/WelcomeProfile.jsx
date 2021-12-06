import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeProfile ({ data }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Welcome back {data.name}</h1>
      <h2 className="text-2xl font-semibold text-center">The best place for people and businesses
        to outsource tasks
      </h2>
      <br></br>
      <p className="text-center leading-normal">Want your home cleaned or furniture put together?</p>
      <p className="text-center leading-normal">Just tell us about the task you’d like done,
      suggest a fair budget for a job well</p>
      <p className="text-justify leading-normal"> done and you’ll start to receive offers from available Taskers.
      </p>

      <p className="text-center leading-normal">Got a question? Simply search our comprehensive </p>
      <div className="help-nav"><Link to='/' className=" inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">Help Centre</Link></div>
      <p className="text-center leading-normal"> for your answer.If you’re still stuck then feel free to
         reach out to our expert.</p>
      <p className="text-center leading-normal">Customer Support Team who are more
         than happy to help.</p>
      <div className="pb-10"></div>
    </div>
  )
}

export default WelcomeProfile
