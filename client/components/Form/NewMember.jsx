import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

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

<<<<<<< HEAD
export default function NewMember() {
=======
export default function NewMember (props) {
  const auth0Id = useSelector(state => state.user.auth0Id)
  const dispatch = useDispatch()
  const { history } = props

>>>>>>> 51ff952ea3c48f55c008c1cebc2ac785435243a4
  const [newMember, setNewMember] = useState(initial)

  function handleChange(e) {
    const { name, value } = e.target

    setNewMember({
      ...newMember,
      [name]: value
    })
  }
<<<<<<< HEAD
  function handleAdd(e) {
    e.preventDefault()
    // pass auth0Id and token as second and third parameter
    newMember(newMember, 'auth0Id', 'token')
      .then(setNewMember)
      .then(closeAddForm)
      .catch(err => console.log(err))
    console.log(newMember)
=======
  function handleSubmit (e) {
    e.preventDefault()
    const newObj = {
      ...newMember,
      auth0Id: auth0Id
    }
    console.log(newObj)
    dispatch(addMember(newObj, history))
>>>>>>> 51ff952ea3c48f55c008c1cebc2ac785435243a4
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
<<<<<<< HEAD
              <input type='text' name='name' value={newMember.fullName} onChange={handleChange} />
=======
              <input type='text' name='name' value={newMember.name} onChange={handleChange}/>
>>>>>>> 51ff952ea3c48f55c008c1cebc2ac785435243a4
            </label>
            <label>Email
              <input type='email' name='email' value={newMember.email} onChange={handleChange} />
            </label>
            <label>Phone
              <input type='text' name='phone' value={newMember.phone} onChange={handleChange} />
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
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  )
}
