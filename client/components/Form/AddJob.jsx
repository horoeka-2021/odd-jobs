import React, { useState } from 'react'

const initial = {
  title: '',
  description: '',
  service_types: '',
  locations: '',
  payment: ''

}

export default function AddJob () {
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
  }
  return (
    <>
      <h2>Add New Job</h2>
      <p>New Zealand&#39;s leading odd jobs platform for local community</p>
      <p>It’s amazing what you can’t do yourself</p>
      <section >
        <form >
          <div >
            <label >Job Title
              <input name='title' value={newJob.title} onChange={handleChange}/>
            </label>
            <label >Job Description
              <textarea name='description' value={newJob.description }onChange={handleChange}/>
            </label>

            <label>Classification</label>
            <select name='service_types' onChange={handleChange}>
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

            <h4>Location</h4>
            <label >Location</label>
            <select name='locations' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>North Auckland</option>
              <option value={2}>South Auckland</option>
              <option value={3}>West Auckland</option>
              <option value={4}>East Auckland</option>
              <option value={5}>Central Auckland</option>
            </select>

            <input type="radio" name='payment' value='Paid' onChange={handleChange}/>
            <label >Paid</label>
            <input type='radio' name='payment' value='koha' onChange={handleChange}/>
            <label>Koha</label>
          </div>
          <button onClick={handleAdd}>Add</button>
        </form>
      </section>
    </>
  )
}
