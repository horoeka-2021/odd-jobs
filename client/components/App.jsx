import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Landing from './Landing'
import Nav from './Nav'
import ApprenticeProfile from './Apprentices/ApprenticeProfile'
import MemberProfile from './Community/MemberProfile'
import JobList from './Jobs/JobList'
import AddJob from './Form/AddJob'
import NewApprentice from './Form/NewApprentice'
import NewMember from './Form/NewMember'
import OurStorys from './OurStorys/OurStorys'
import WaitIndicator from './WaitIndicator'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchAllProfiles } from '../actions/profiles'

// authentication
import { cacheUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  cacheUser(useAuth0)

  return (
    <Router>
      <Route path='/' component={Nav} />
      <Route path='/' exact render={({ history }) => <Landing history={history}/>}/>
      <Route path='/ourstorys' component={OurStorys} />
      <Route exact path='/apprentices/:id' component={ApprenticeProfile} />
      <Route exact path='/members/:id' render={({ history }) => {
        return <MemberProfile history={history}>
          <WaitIndicator />
        </MemberProfile>
      }} />
      <Route exact path='/jobs' component={JobList} />
      <Route path='/jobs/new' component={AddJob} />
      <Route exact path='/apprentice/new' component={NewApprentice} />
      <Route exact path='/member/new' render={({ history }) => <NewMember history={history}/>} />
    </Router>
  )
}

export default App
