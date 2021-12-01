import { HashRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react'
import Landing from './Landing'
import ExampleDataFromServer from './ExampleDataFromServer'
import Nav from './Nav'

// authentication
import { cacheUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'
import Apprentice from './Apprentices/Apprentice'
import Community from './Community/Community'
import JobList from './Jobs/JobList'
import AddJob from './Form/AddJob'
import NewApprentice from './Form/NewApprentice'

function App () {
  cacheUser(useAuth0)
  return (
    <Router>
      <Route path='/' component={Nav} />
      <Route path='/' exact render={() => <Landing title='Welcome'/>}/>
      <Route exact path='/apprentice' component={Apprentice} />
      <Route exact path='/community' component={Community} />
      <Route path='/jobs' component={JobList} />
      <Route path='/job/new' component={AddJob} />
      <Route path='/apprentice/new' component={NewApprentice} />

      <Route path='/example' exact component={ExampleDataFromServer}/>
    </Router>
  )
}

export default App
