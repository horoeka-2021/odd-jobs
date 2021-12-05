import React from 'react'

function ProfileItem (props) {
  const { id, name, email, phone, birthDate: birthday, genderId: gender } = props.data
  console.log(id)
  const genderList = { 1: 'Male', 2: 'Female', 3: 'Not Specified' }

  return (
    <div>
      <h1>Profile item</h1>
      <p>{name}</p>
      <p>{birthday}</p>
      <p>{ genderList[gender]}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  )
}

export default ProfileItem
