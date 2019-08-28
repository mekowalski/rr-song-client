import api from '../api/api';
import GET_SONGS_SUCCESS  from '../reducers/songs';

// export const getSongs = () => {
//   return dispatch => {
//     return api.get('/songs')
//     .then(songs => {
//       dispatch({ type: GET_SONGS_SUCCESS, payload: response.data })
//     })
//   }
// }

//how to get response from api/api.js

export const getSongs = () => {
  return dispatch => {
    const response = api.get('/songs')

    dispatch({ type: GET_SONGS_SUCCESS, payload: response.data })
    console.log(response) //this does log the promise retuens with the 2 songs
  }
}
