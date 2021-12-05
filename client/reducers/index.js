import { combineReducers } from 'redux'

import examples from './examples'
import waiting from './waiting'
import user from './user'
import profiles from './profiles'
import jobs from './jobs'

export default combineReducers({
  examples,
  waiting,
  user,
  profiles,
  jobs
})
