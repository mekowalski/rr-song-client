import api from '../api/api';
import { GET_SONGS_SUCCESS } from './reducers/songs';

export const getSongs = () => {
  return dispatch => {
    return api.get('/songs')
    .then(songs => {
      dispatch({ type: GET_SONGS_SUCCESS, payload: response.data })
    })
  }
}
