import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeProfile ({ data }) {
  return (
    <div>
      <h1>Welcome back {data.name}</h1>
      <h2>The best place for people and businesses
to outsource tasks</h2>
      <p>Want your home cleaned or furniture put together? Just tell us about the task you’d like done, suggest a fair budget for a job well done and you’ll start to receive offers from available Taskers.

      </p>

      <p>Got a question? Simply search our comprehensive <Link to='/'>Help Centre </Link> for your answer. If you’re still stuck then feel free to reach out to our expert Customer Support Team who are more than happy to help.</p>
    </div>
  )
}

export default WelcomeProfile
