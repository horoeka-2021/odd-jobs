import { combineReducers } from 'redux'

import examples from './examples'
import waiting from './waiting'

export default combineReducers({
  examples,
  waiting
})
