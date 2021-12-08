import store from '../store'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export async function cacheUser (useAuth0, state) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated && !state?.token) {
    try {
      const accessToken = await getAccessTokenSilently()

      // console.log('token\n', accessToken)
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken
      }
      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
