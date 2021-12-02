import { HashRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react'
import Landing from './Landing'
import Nav from './Nav'

// authentication
import { cacheUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'
import ApprenticeProfile from './Apprentices/ApprenticeProfile'
import MemberProfile from './Community/MemberProfile'
import JobList from './Jobs/JobList'
import AddJob from './Form/AddJob'
import NewApprentice from './Form/NewApprentice'
import NewMember from './Form/NewMember'

function App () {
  cacheUser(useAuth0)
  return (
    <Router>
      <Route path='/' component={Nav} />
      <Route path='/' exact render={() => <Landing title='Welcome'/>}/>
      <Route exact path='/apprentice' component={ApprenticeProfile} />
      <Route exact path='/member' component={MemberProfile} />
      <Route path='/jobs' component={JobList} />
      <Route path='/job/new' component={AddJob} />
      <Route path='/apprentice/new' component={NewApprentice} />
      <Route path='/member/new' component={NewMember} />

      <Route path='/example' exact component={ExampleDataFromServer}/>
    </Router>
  )
}

export default App
