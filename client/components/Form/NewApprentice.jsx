import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

export default function NewApprentice () {
  const [newApprentice, setNewApprentice] = useState([])
  // const history = useHistory()

  function handleChange (e) {
    const { name, value } = e.target

    setNewApprentice({
      ...newApprentice,
      [name]: value
    })
  }

  function handleAdd (e) {
    e.preventDefault()

    console.log(newApprentice)
    // dispatch(addNewJob(newObj))
    // setNewJob(initial)
  }
  // const jobList = ['Plumber', 'Electrician', 'Developer', 'Tutor', 'Builder', 'House Kepper', 'Community Support Worker', 'Babysitter', 'Gardener', 'Painter', 'Mechanic', ' Mover', 'Dog Walker']
  return (

    <>
      <div className="container mx-auto artboard artboard-demo">
        <div className="grid grid-col-2 float-right w-4/5 p-8">
          <div><h1 className="text-3xl font-semibold">Become Apprentices Today!</h1></div>
          <div><p>Work for, and learn from, an platforn to gain on job experiences</p></div>
        </div>
        <section className="w-3/5" >
          <form >
            <div >
              <h2 className="text-2xl font-semibold">Personal Info</h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type='text' name="name" value={newApprentice.name} onChange={handleChange}
                  placeholder="name" className="input input-bordered"/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type='email'name="email" value={newApprentice.email} onChange={handleChange}
                  placeholder="email" className="input input-bordered"/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type= 'text' name="phone" value={newApprentice.phone} onChange={handleChange}
                  placeholder="phone" className="input input-bordered" />
              </div>

              {/* <label htmlFor="birthday">Birthday</label> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <input type='text'name="gender" value={newApprentice.gender} onChange={handleChange}
                  placeholder="gender" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea name='description' value={newApprentice.description} onChange={handleChange}
                  className="textarea h-24 textarea-bordered" placeholder="description" />
              </div>

              <div>
                <label className="label">Classification</label>
                <select className="select select-bordered w-full max-w-xs"
                  name='service_types' onChange={handleChange}>
                  <option hidden>Select from this list</option>
                  <option value={1}>Plumber</option>
                  <option value={2}>Electrician</option>
                  <option value={3}>Carpenter</option>
                  <option value={4}>Painter</option>
                  <option value={5}>Landscaper</option>
                  <option value={6}>Builder</option>
                  <option value={7}>Gardener</option>
                  <option value={8}>Developer</option>
                  <option value={9}>Mechanic</option>
                  <option value={10}>Tutor</option>
                </select>
              </div>

              <p className="label-text">Location</p>

              <div className='form-control float-left'>
                <label className="cursor-pointer label">
                  <input type='checkbox' name='central' checked={newApprentice.central}
                    onChange={handleChange} className='checkbox' />
                  <span className='label-text'>Central Auckland</span>
                </label>
              </div>

              <div className='form-control float-left'>
                <label className="cursor-pointer label">
                  <input type='checkbox' name='north' checked={newApprentice.north}
                    onChange={handleChange} className='checkbox' />
                  <span className='label-text'>North Auckland</span>
                </label>
              </div>

              <div className='form-control float-left'>
                <label className="cursor-pointer label">
                  <input type='checkbox' name='east' checked={newApprentice.east}
                    onChange={handleChange} className='checkbox' />
                  <span className='label-text'>East Auckland</span>
                </label>
              </div>

              <div className='form-control float-left'>
                <label className="cursor-pointer label">
                  <input type='checkbox' name='west' checked={newApprentice.west}
                    onChange={handleChange} className='checkbox' />
                  <span className='label-text'>West Auckland</span>
                </label>
              </div>

              <div className='form-control float-left'>
                <label className="cursor-pointer label">
                  <input type='checkbox' name='south' checked={newApprentice.south}
                    onChange={handleChange} className='checkbox' />
                  <span className='label-text'>South Auckland</span>
                </label>
              </div>

              <label className="label">Experience</label>
              <select className="select select-bordered w-full max-w-xs"
                name='experience' onChange={handleChange}>
                <option hidden>Select from this list</option>
                <option value={1}>Less than 6 months</option>
                <option value={2}>6- 12 months</option>
                <option value={3}>more than 12 months</option>
              </select>

            </div>
            <div className="submit-div">
              <button className="inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600"onClick={handleAdd}>
             Submit</button>
            </div>
          </form>
        </section>

      </div>
    </>
  )
}
