import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make a http request to get token for signin
  }
}

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make a http request to get token for signup
  }
}

const signout = (dispatch) => {
  return () => {
    // remove the user token
  }
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
)