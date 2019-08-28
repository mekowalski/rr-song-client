import api from '../api/api';

export const getSongs = () => {
  return dispatch => {
    return api.get('/songs')
    .then(songs => {

    })
  }
}
