import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (state, action) => {
  switch(action.type) {
    case 'CREATING':
      return { ...state, loading: true }
    case 'CREATED':
      return { ...state, loading: false }
    case 'FETCHING':
      return { ...state, fetching: true }
    case 'FETCH_TRACKS':
      return { ...state, fetching: false, tracklist: [...action.payload] }
    default:
      return state; 
  }
}

const fetchTracks = dispatch => async () => {
  dispatch({ type: 'FETCHING' });
  const response = await trackerAPI.get('/tracks');
  dispatch({ type: 'FETCH_TRACKS', payload: response.data });
}
const createTrack = dispatch => async (name, locations) => {
  dispatch({ type: 'CREATING' });
  await trackerAPI.post('/tracks', { name, locations });
  dispatch({ type: 'CREATED' });

}

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  { tracklist: [], loading: false, fetching: false }
)