import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

export default function NewApprentice () {
  const [newApprentice, setNewApprentice] = useState([])
  const history = useHistory()
  const minDate = new Date('12/02/2003')

  function handleChange () {

  }
  function handleAdd () {

  }

  const jobList = ['Plumber', 'Electrician', 'Developer', 'Tutor', 'Builder', 'House Kepper', 'Community Support Worker', 'Babysitter', 'Gardener', 'Painter', 'Mechanic', ' Mover', 'Dog Walker']
  return (

    <>
      <h2>Become Apprentices Today!</h2>
      <p>Work for, and learn from, an platforn to gain on job experiences</p>

      <p>Earn up to $5,000 a month on odd Jobs</p>
      <section >
        <form >
          <div >
            <h4>Personal Info</h4>
            <label>Name
              <input type='text' name="name" value={newApprentice.name} onChange={handleChange}/>
            </label>
            <label>Email
              <input type='email'name="email" value={newApprentice.email} onChange={handleChange}/>
            </label>
            <label>Phone
              <input type= 'number' name="phone" value={newApprentice.phone} onChange={handleChange}/>
            </label>
            <label htmlFor="birthday">Birthday
              <DatePickerComponent id="datepicker" format='dd-MMM-yy' min={minDate}/></label>
            <label>Gender
              <input type='gender'name="gender" value={newApprentice.gender} onChange={handleChange}/>
            </label>

            <label name='description'>Description</label>
            <textarea name='description' value='' onChange={handleChange}/>

            <h4>Classification</h4>
            <label >
              <input type='checkbox' name='plumber' checked={newApprentice.plumber} onChange={handleChange} />
              Plumber</label>

            <label >
              <input type='checkbox' name='electrician' checked={newApprentice.electrician} onChange={handleChange} />
              Electrician</label>

            <label >
              <input type='checkbox' name='developer' checked={newApprentice.developer} onChange={handleChange} />
              Developer</label>

            <label >
              <input type='checkbox' name='tutor' checked={newApprentice.tutor} onChange={handleChange} />
              Tutor</label>

            <label >
              <input type='checkbox' name='builder' checked={newApprentice.builder} onChange={handleChange} />
              Builder</label>

            <label >
              <input type='checkbox' name='houseKeeping' checked={newApprentice.houseKeeping} onChange={handleChange} />
              HouseKeeping</label>

            <label >
              <input type='checkbox' name='support' checked={newApprentice.support} onChange={handleChange} />
              Community Support Worker</label>

            <label >
              <input type='checkbox' name='babysitter' checked={newApprentice.babysitter} onChange={handleChange} />
              Babysitter</label>

            <label >
              <input type='checkbox' name='gardener' checked={newApprentice.gardener} onChange={handleChange} />
              Gardener</label>

            <label >
              <input type='checkbox' name='painter' checked={newApprentice.painter} onChange={handleChange} />
              Painter</label>

            <label>
              <input type='checkbox' name='mechanic' checked={newApprentice.mechanic} onChange={handleChange} />
              Mechanic</label>

            <label>
              <input type='checkbox' name='mover' checked={newApprentice.mover} onChange={handleChange} />
              Mover</label>

            <label >
              <input type='checkbox' name='dog_Walker' checked={newApprentice.dog_Walker} onChange={handleChange} />
              Dog Walker</label>

            <h4>Location</h4>
            <label >
              <input type='checkbox' name='central' checked={newApprentice.central} onChange={handleChange} />
              Central Auckland
            </label>
            <label>
              <input type='checkbox' name='north' checked={newApprentice.north} onChange={handleChange} />
              North Auckland
            </label>
            <label>
              <input type='checkbox' name='east' checked={newApprentice.east} onChange={handleChange} />
              East Auckland
            </label>
            <label>
              <input type='checkbox' name='west' checked={newApprentice.west} onChange={handleChange} />
              West Auckland
            </label>
            <label>
              <input type='checkbox' name='south' checked={newApprentice.south} onChange={handleChange} />
              South Auckland
            </label>

            <h4>Experience</h4>
            <label htmlFor='experience' >Experience</label>
            <select name='experience' onChange={handleChange}>
              <option hidden>Select from this list</option>
              <option value={1}>Less than 6 months</option>
              <option value={2}>6- 12 months</option>
              <option value={3}>more than 12 months</option>
            </select>

          </div>
          <button onClick={handleAdd}>Submit</button>
        </form>
      </section>
    </>
  )
}
