import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import { useSelector } from 'react-redux'

// import { useAuth0 } from '@auth0/auth0-react'
const initial = {
  name: '',
  email: '',
  phone: '',
  locations: ''

}

export default function NewMember() {
  const [newMember, setNewMember] = useState(initial)

  function handleChange(e) {
    const { name, value } = e.target

    setNewMember({
      ...newMember,
      [name]: value
    })
  }
  function handleAdd(e) {
    e.preventDefault()
    // pass auth0Id and token as second and third parameter
    newMember(newMember, 'auth0Id', 'token')
      .then(setNewMember)
      .then(closeAddForm)
      .catch(err => console.log(err))
    console.log(newMember)
  }

  return (

    <>

      <h2>Become Member Today!</h2>
      <p>The best place for people and businesses to outsource tasks</p>

      <section >
        <form >
          <div >
            <h4>Personal Info</h4>
            <label>Name
              <input type='text' name='name' value={newMember.fullName} onChange={handleChange} />
            </label>
            <label>Email
              <input type='email' name='email' value={newMember.email} onChange={handleChange} />
            </label>
            <label>Phone
              <input type='text' name='phone' value={newMember.phone} onChange={handleChange} />
            </label>

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

          </div>
          <button onClick={handleAdd}>Submit</button>
        </form>
      </section>
    </>
  )
}
