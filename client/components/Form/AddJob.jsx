import React, { useState } from 'react'

const initial = {
  title: '',
  description: '',
  service_types: '',
  locations: '4',
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
      <div>
        <h2 className="text-2xl font-semibold">Add New Job</h2>
        <p>New Zealand&#39;s leading odd jobs platform for local community</p>
        <p>It’s amazing what you can’t do yourself</p>
      </div>

      <section >
        <form >
          <div >
            <div className="form-control pt-5">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input name='title' value={newJob.title} onChange={handleChange}
                className="input input-bordered w-3/4"/>
            </div>

            <div className="form-control">
              <label className="label">Job Description
                <textarea name='description' value={newJob.description}
                  onChange={handleChange} className="textarea h-24
              textarea-bordered pr-40 mr-64 mt-4"/>
              </label>
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

            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input type="radio" name='payment' value='Paid' className="radio" onChange={handleChange}/>
                <span className="label-text inline">Paid</span>
              </label>
            </div>

            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input type='radio' name='payment' value='koha' className="radio" onChange={handleChange}/>
                <span className="label-text">Koha</span>
              </label>
            </div>

          </div>

          <div className="addjob-but">
            <button className="inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600" onClick={handleAdd}>ADD JOB
            </button>
          </div>

        </form>
      </section>
    </>
  )
}
