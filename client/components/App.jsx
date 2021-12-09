import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Landing from './Landing'
import Nav from './Nav'
import ApprenticeProfile from './Apprentices/ApprenticeProfile'
import MemberProfile from './Community/MemberProfile'
import NewApprentice from './Form/NewApprentice'
import NewMember from './Form/NewMember'
import OurStorys from './OurStorys/OurStorys'
import Signup from './Signup'
import WaitIndicator from './WaitIndicator'
import Footer from './Footer'

// authentication
import { cacheUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  cacheUser(useAuth0)

  return (
    <div maxWidth="980px">
      <Router>
        <Route path='/' component={Nav} />
        <Route path='/' exact render={({ history }) => <Landing history={history}/>}/>
        <Route path='/ourstorys' component={OurStorys} />
        <Route exact path='/apprentices' component={ApprenticeProfile} />
        <Route path='/member' render={({ history }) => {
          return <MemberProfile history={history}>
            <WaitIndicator />
          </MemberProfile>
        }} />
        <Route exact path='/signup' >
          <Signup />
        </Route>
        <Route path='/apprentice/new' component={NewApprentice} />
        <Route path='/members/new' render={({ history }) => <NewMember history={history}/>} />
        <Footer />
      </Router>
    </div>
  )
}

export default App
