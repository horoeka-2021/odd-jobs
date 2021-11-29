import { HashRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react'
import Example from './Example'
import ExampleDataFromServer from './ExampleDataFromServer'
import Nav from './Nav'

// authentication
import { cacheUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  cacheUser(useAuth0)
  return (
    <Router>
      <Route path='/' component={Nav} />
      <h1>Hello from React - env : {process.env.NODE_ENV}</h1>
      <Link to='/example'>To see the example</Link>
      <Route path='/example' exact render={() => <Example title='Welcome'/>}/>
      <Route path='/example' exact component={ExampleDataFromServer}/>
    </Router>
  )
}

export default App
