import React from 'react'
import ReactDOM from 'react-dom'

import 'regenerator-runtime/runtime'

// redux
import { Provider } from 'react-redux'

// for Auth0
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain = {'dev-hqh750ov.us.auth0.com'}
      clientId = {'Y8kWvD8bFKys82baQnDQQLE9E6fdjpgv'}
      redirectUri={window.location.origin}
      audience='https://oddjobs-horoeka.herokuapp.com'
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('react-component-here')
  )
})
