export const getSongs = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/songs')
    .then(response => response.json())
    .then()
  }
}
