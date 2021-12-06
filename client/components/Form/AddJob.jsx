import React, { useState } from 'react'

const initial = {
  title: '',
  description: '',
  service_types: '',
  locations: '',
  payment: ''

}

export default function AddJob (props) {
  // const { history } = props
  const [newJob, setNewJob] = useState(initial)

  function handleChange (e) {
    const { name, value } = e.target

    setNewJob({
      ...newJob,
      [name]: value
    })
  }

  function handleAdd (e) {
    e.preventDefault()

    console.log(newJob)
    // history.push('/')
  }
  console.log('add job -- ', props.userID)
  return (
    <>
      <h2>Add New Job</h2>
      <p>New Zealand&#39;s leading odd jobs platform for local community</p>
      <p>It’s amazing what you can’t do yourself</p>
      <section>
        <div>
          <div className="form-control">
            <label className="label">Job Title
              <input name='title' value={newJob.title} onChange={handleChange}/>
            </label>
          </div>

          <div className="form-control">
            <label className="label">Job Description
              <textarea name='description' value={newJob.description }onChange={handleChange}/>
            </label>
          </div>

          <div>
            <label className="label">Classification</label>
            <select className="select select-bordered w-full max-w-xs" name='service_types' onChange={handleChange}>
              <option disabled="disabled" selected="selected">Select from this list</option>
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

          {/* <h4>Location</h4>
            <label >Location</label>
            <select name='locations' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>North Auckland</option>
              <option value={2}>South Auckland</option>
              <option value={3}>West Auckland</option>
              <option value={4}>East Auckland</option>
              <option value={5}>Central Auckland</option>
            </select> */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Paid</span>
              <input type="radio" name='payment' value='Paid' className="radio" onChange={handleChange}/>
            </label>
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Koha</span>
              <input type='radio' name='payment' value='koha' className="radio" onChange={handleChange}/>
            </label>
          </div>

          <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600" onClick={handleAdd}>Add</button>
        </div>
      </section>
    </>
  )
}
