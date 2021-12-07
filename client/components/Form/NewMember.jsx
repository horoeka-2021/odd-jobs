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
    console.log(newObj)
    dispatch(addMember(newObj, history))
  }

  return (

    <>
      <div className="container mx-auto artboard artboard-demo w-11/12">
        <div className="grid grid-col-2 float-right w-4/5 p-8"></div>
        <div className="newmember-head"><h1 className="text-3xl font-semibold">Become Community Member Today!</h1></div>
        <div className="newmember-text"><p>The best place for people and businesses to outsource tasks</p></div>

        <section className="w-3/5 pt-10">
          <form onSubmit={handleSubmit}>
            <div >
              <h2 className="text-2xl font-semibold">Personal Info</h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type='text' name="name" value={newMember.name} onChange={handleChange}
                  placeholder="name" className="input input-bordered"/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type='text' name="email" value={newMember.email} onChange={handleChange}
                  placeholder="info@domain.com" className="input input-bordered"/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type='text' name="phone" value={newMember.phone} onChange={handleChange}
                  placeholder="phone" className="input input-bordered"/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Birth Date</span>
                </label>
                <input type='date' name="birthDate" value={newMember.birthDate} onChange={handleChange}
                  placeholder="dd/mm/yyyy" className="input input-bordered text-gray-400"/>
              </div>

              <div>
                <label className="label">Gender</label>
                <select className="select select-bordered w-full max-w-xs"
                  name='genderId' onChange={handleChange}>
                  <option hidden>Select from this list</option>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                  <option value={3}>Not Specified</option>
                </select>
              </div>
              <div className="pt-10 float-right">
                <button className="inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">
             Submit</button>
                <div className="pb-10"></div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
