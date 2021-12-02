import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'

export default function AddJob () {
  const history = useHistory()

  function handleChange () {

  }

  function handleAdd () {

  }
  return (
    <>
      <h2>Add New Job</h2>
      <p>New Zealand&#39;s leading odd jobs platform for local community</p>
      <p>It’s amazing what you can’t do yourself</p>
      <section >
        <form >
          <div >
            <label htmlFor='title'>Job Title</label>
            <input name='title' value='title' onChange={handleChange}/>
            <label htmlFor='description'>Job Description</label>
            <DateRangePickerComponent id="daterangepicker"
              placeholder='Select a range'
              format='dd-MMM-yy'
              start="Year"
              depth="Year" />

            <textarea name='description' value='description' onChange={handleChange}/>
            <label htmlFor='classification' ></label>
            <select name='classification'onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>Plumber</option>
              <option value={2}>Electrician</option>
              <option value={3}>Developer</option>
              <option value={4}>Tutor</option>
              <option value={5}>Builder</option>
              <option value={6}>House Kepper</option>
              <option value={7}>Community Support Worker</option>
              <option value={8}>Babysitter</option>
              <option value={9}>Gardener</option>
              <option value={10}>Painter</option>
              <option value={11}>Mechanic</option>
              <option value={12}>Mover</option>
              <option value={13}>Dog Walker</option>
            </select>
            <label htmlFor='location' >Location</label>
            <select name='location' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>Central Auckland</option>
              <option value={2}>North Auckland</option>
              <option value={3}>East Auckland</option>
              <option value={4}>West Auckland</option>
              <option value={5}>South Auckland</option>
            </select>

            <input type="radio" name='payment' value='paid'/>
            <label htmlFor='paid'>Paid</label>
            <input type='radio' name='payment' value='koha'/>
            <label htmlFor="koha">Koha</label>
          </div>
          <button onClick={handleAdd}>Add</button>
        </form>
      </section>
    </>
  )
}
