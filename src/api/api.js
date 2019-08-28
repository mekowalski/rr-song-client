export default class {
  baseURL = 'http://localhost:3001/api'

  static get(url) {
    return fetch(`http://localhost:3001/api${url}`)
    .then(response => response.json())
  }
}
