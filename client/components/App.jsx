import React from 'react'
import { Link, Route } from 'react-router-dom'
import Example from './Example'
import ExampleDataFromServer from './ExampleDataFromServer'

function App () {
  return (
    <div>
      <h1>Hello from React</h1>
      <Link to='/example'>To see the example</Link>
      <Route path='/example' exact render={() => <Example title='Welcome'/>}/>
      <Route path='/example' exact component={ExampleDataFromServer}/>
    </div>
  )
}

export default App
