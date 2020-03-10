import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch(action.type) {
    case 'SIGNUP':
      return { ...state, userToken: action.payload, errorMessage: '' }
    case 'SIGNIN':
      return { ...state, userToken: action.payload, errorMessage: '' }
    case 'SET_USER_TOKEN':
      return { ...state, userToken: action.payload, errorMessage: '' }
    case 'ERROR_OCCURS':
      return { ...state, errorMessage: action.payload }
    default:
      return state;
  }
}

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('userToken', response.data.token);
    dispatch({ type: 'SIGNIN', payload: response.data.token });
  } catch (err) {
    if(err.response && err.response.data) return dispatch({
      type: 'ERROR_OCCURS', payload: err.response.data.error
    })
    dispatch({
      type: 'ERROR_OCCURS', payload: 'Something went wrong with signin'
    })
  }
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signup', { email, password });
    await AsyncStorage.setItem('userToken', response.data.token);
    dispatch({ type: 'SIGNUP', payload: response.data.token });
  } catch (err) {
    if(err.response && err.response.data && err.response.data.includes('duplicate')) return dispatch({
      type: 'ERROR_OCCURS', payload: 'Email already exists'
    })
    dispatch({
      type: 'ERROR_OCCURS', payload: 'Something went wrong with signup'
    })
  }
}

const signout = (dispatch) => {
  return () => {
    // remove the user token
  }
}

const setUserToken = (dispatch) => (userToken) => {
  dispatch({ type: 'SET_USER_TOKEN', payload: userToken })
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout, setUserToken },
  { 
    userToken: null,
    errorMessage: ''
  }
)