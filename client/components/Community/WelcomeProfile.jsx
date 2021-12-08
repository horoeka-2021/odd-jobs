import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeProfile({ data }) {
  return (
    <div className="pb-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-3">Welcome to the Info Hub <span className='text-neutral font-bold text-5xl'>{data.name}!</span></h1>
        <h2 className="text-2xl font-semibold text-center">The latest news and updates for the OddJobs Community</h2>
        <br></br>
        <p className="text-center leading-loose">Community Notices:</p>
        <p className="text-center leading-loose">Featured Job: </p>
      </p>
      <p className="text-center leading-loose p-3">done and you’ll start to receive offers from available Taskers.
      </p>

      <p className="text-center leading-loose">Got a question? Simply search our comprehensive </p>
      <div className="help-nav pt-8 pb-8"><Link to='/' className=" inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">Help Centre</Link></div>
      <p className="text-center leading-loose break-words"> for your answer.If you’re still stuck then feel free to
        reach out to our expert.</p>
      <p className="text-center leading-loose">Customer Support Team who are more
        than happy to help.</p>
      <div className="pb-2"></div>
      <div><img src="../img/customercare.png" className="max-w-xl ml-14" /></div>
    </div>
    </div >
  )
}

export default WelcomeProfile
