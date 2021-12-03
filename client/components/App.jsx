import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Landing from './Landing'
import Nav from './Nav'
import ApprenticeProfile from './Apprentices/ApprenticeProfile'
import MemberProfile from './Community/MemberProfile'
import JobList from './Jobs/JobList'
import AddJob from './Form/AddJob'
import NewApprentice from './Form/NewApprentice'
import NewMember from './Form/NewMember'

// authentication
import { cacheUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  cacheUser(useAuth0)
  return (
    <Router>
      <Route path='/' component={Nav} />
      <Route path='/' exact render={() => <Landing title='Welcome'/>}/>
      <Route exact path='/apprentices/:id' component={ApprenticeProfile} />
      <Route exact path='/members/:id' component={MemberProfile} />
      <Route exact path='/jobs' component={JobList} />
      <Route path='/jobs/new' component={AddJob} />
      <Route exact path='/apprentice/new' component={NewApprentice} />
      <Route exact path='/member/new' component={NewMember} />
    </Router>
  )
}

export default App
