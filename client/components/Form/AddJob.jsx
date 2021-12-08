import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewJob } from '../../actions/jobs'

const initial = {
  title: '',
  description: '',
  serviceTypeId: 1,
  locationId: 2,
  paid: 0,
  expectedStart: '',
  expectedEnd: ''

}
// waiting for backend to send location ID
export default function AddJob (props) {
  const { userID } = props
  const [newJob, setNewJob] = useState(initial)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const dispatch = useDispatch()
  function handleChange (e) {
    const { name, value } = e.target

    setNewJob({
      ...newJob,
      [name]: value
    })
  }

  function handleAdd (e) {
    e.preventDefault()

    const newObj = {
      ...newJob,
      // jobCreatedDate: jobCreatedDate,
      userId: userID
    }
    // console.log(newObj)
    dispatch(addNewJob(newObj))
    setNewJob(initial)
    setFormSubmitted(true)
  }

  return (
    <>

      <div>
        <h2 className="text-2xl font-semibold">Add New Job</h2>
        <p>New Zealand&#39;s leading odd jobs platform for local community</p>
        <p>It’s amazing what you can’t do yourself</p>
      </div>

      {formSubmitted === false
        ? <section>
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
                <label className="label">
                  <span className="label-text">Job Description</span>
                </label>
                <textarea name='description' value={newJob.description}
                  onChange={handleChange} className="textarea h-24
                textarea-bordered pr-42 w-3/4"/>
              </div>

              <div>
                <label className="label">Classification</label>
                <select className="select select-bordered w-full max-w-xs"
                  name='serviceTypeId' onChange={handleChange}>
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

              <div className="form-control mt-6 pr-10">
                <label className="label">
                  <span className="label-text">Start Date: </span>
                </label>

                <input type='date' name='expectedStart' value={newJob.expectedStart} onChange={handleChange} className="input input-bordered w-3/4"/>

                <label className="label">
                  <span className="label-text">End Date: </span>
                </label>

                <input type='date' name='expectedEnd' vaule={newJob.expectedEnd} onChange={handleChange} className="input input-bordered w-3/4"/>

              </div>

              <div className="form-control inline-block mt-6">
                <label className="cursor-pointer label ">
                  <input type="radio" name='paid' value={0} className="radio mr-4" onChange={handleChange}/>
                  <span className="label-text ">Paid</span>
                </label>
                <label className="cursor-pointer label  ">
                  <input type="radio" name='paid' value={1} className="radio mr-4" onChange={handleChange}/>
                  <span className="label-text ">Koha</span>
                </label>
              </div>

            </div>

            <div className="addjob-but pt-5 pb-10">
              <button className="inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600" onClick={handleAdd}>ADD JOB
              </button>
            </div>

          </form>
        </section>

        : <div className="m-14">
          <h1 className='text-xl font-mono medium text-green-400'>Job successfully created</h1> </div> }

    </>
  )
}
