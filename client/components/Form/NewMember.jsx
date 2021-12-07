import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addMember } from '../../actions/profiles'

const initial = {
  auth0Id: '',
  name: '',
  email: '',
  phone: '',
  birthDate: '',
  genderId: ''

}

export default function NewMember (props) {
  const auth0Id = useSelector(state => state.user.auth0Id)
  const dispatch = useDispatch()
  const { history } = props

  const [newMember, setNewMember] = useState(initial)

  function handleChange (e) {
    const { name, value } = e.target

    setNewMember({
      ...newMember,
      [name]: value
    })
  }
  function handleSubmit (e) {
    e.preventDefault()
    const newObj = {
      ...newMember,
      auth0Id: auth0Id
    }
    // console.log(newObj)
    dispatch(addMember(newObj, history))
  }

  return (

    <>

      <h2>Become Member Today!</h2>
      <p>The best place for people and businesses to outsource tasks</p>

      <section >
        <form onSubmit={handleSubmit}>
          <div >
            <h4>Personal Info</h4>
            <label>Name
              <input type='text' name='name' value={newMember.name} onChange={handleChange}/>
            </label>
            <label>Email
              <input type='email'name='email' value={newMember.email} onChange={handleChange}/>
            </label>
            <label>Phone
              <input type= 'text' name='phone' value={newMember.phone} onChange={handleChange}/>
            </label>
            <label>Date of Birth
              <input type='date' name='birthDate' value={newMember.birthDate} onChange={handleChange}/>
            </label>
            <label>Gender</label>
            <select name='genderId' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Not Specified</option>
            </select>
            <select name='locationId' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>North Auckland</option>
              <option value={2}>South Auckland</option>
              <option value={3}>West Auckland</option>
              <option value={4}>East Auckland</option>
              <option value={5}>Central Auckland</option>
            </select>
            <div><button>Submit</button></div>
          </div>
        </form>
      </section>
    </>
  )
}
