import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'

// import { IfNotAuthenticated } from './Auth0/Authenticated'

function Signup () {
//   const { loginWithRedirect } = useAuth0()

  //   function handleLogIn (e) {
  //     e.preventDefault()
  //     loginWithRedirect()
  //   }

  return (
    <div className="container mx-auto artboard artboard-demo">

      <section className="w-3/5 p-16" >
        <form >
          <div><h1 className="text-3xl font-semibold">Register</h1></div>
          <div><p>Please fill up the form and register to become a memeber</p></div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type='text' name="name" placeholder="name" className="input input-bordered"/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type='text' name="email" placeholder="youremail@domain.com" className="input input-bordered"/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type='text' name="password" placeholder="password" className="input input-bordered"/>
          </div>
          <div className="pt-5">
            <a className="link justify-baseline">Already a member</a>
            <div>
              <button className="inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600 float-right">
             REGISTER
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Signup
