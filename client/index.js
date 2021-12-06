import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'

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
      domain = {'dev-bekgk-j7.us.auth0.com'}
      clientId = {'Cgi79romxK0TEunaP25UzzSgFdDNUVrt'}
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
