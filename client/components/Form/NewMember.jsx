import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function NewApprentice () {
  const [newMember, setNewMember] = useState([])
  const history = useHistory()

  function handleChange () {

  }
  function handleAdd () {

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
              <input type='text' name="name" value={newMember.name} onChange={handleChange}/>
            </label>
            <label>Email
              <input type='email'name="email" value={newMember.email} onChange={handleChange}/>
            </label>
            <label>Phone
              <input type= 'number' name="phone" value={newMember.phone} onChange={handleChange}/>
            </label>

            <h4>Location</h4>
            <label htmlFor='location' >Location</label>
            <select name='location' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>Central Auckland</option>
              <option value={2}>North Auckland</option>
              <option value={3}>East Auckland</option>
              <option value={4}>West Auckland</option>
              <option value={5}>South Auckland</option>
            </select>

          </div>
          <button onClick={handleAdd}>Submit</button>
        </form>
      </section>
    </>
  )
}
