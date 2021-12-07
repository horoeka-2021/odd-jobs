import React from 'react'

function ProfileItem (props) {
  const { id, name, email, phone, birthDate: birthday, genderId: gender } = props.data

  const genderList = { 1: 'Male', 2: 'Female', 3: 'Not Specified' }

  return (
    <div className="grid grid-cols-2 px-6">
      <div className="">
        <div className="avatar placeholder">
          <div className="bg-indigo-600 text-neutral-content rounded-full w-20 h-20">
            <span>{name.charAt(0)}</span>
          </div>
        </div>
      </div>

      <div className="self-center">
        <h1 className="text-3xl text-indigo-600">Member Profile</h1></div>

      <div className="" >
        <p>Name:</p>
        <p>Birthdate:</p>
        <p>Gender:</p>
        <p>Phone:</p>
        <p>Email:</p>
      </div>

      <div className="" key={id}>
        <p>{name}</p>
        <p>{birthday}</p>
        <p>{genderList[gender]}</p>
        <p>{phone}</p>
        <p className="pb-5">{email}</p>
        <button className="inline-block px-4 py-3 text-sm
          font-semibold text-center text-white uppercase transition duration-200 ease-in-out
         bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600 float-right">Edit</button>
      </div>
      <div className="pt-8 pb-8"></div>
    </div>

  )
}

export default ProfileItem
