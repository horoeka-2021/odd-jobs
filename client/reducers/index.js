import { combineReducers } from 'redux'

import examples from './examples'
import waiting from './waiting'
import user from './user'

export default combineReducers({
  examples,
  waiting,
  user
})
