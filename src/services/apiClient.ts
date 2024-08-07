import axios from 'axios'

function ApiClient() {
  const api = axios.create({
    baseURL: `http://172.22.0.17:3332`,
    timeout: 30000,
    headers: {
      'X-Custom-Header': 'foobar',
    },
  })

  return api
}

/**
 * API for using in test enviroment
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function ApiTest() {
//   const api = axios.create({
//     baseURL: `http://localhost:5000`,
//     timeout: 30000,
//     headers: {
//       'X-Custom-Header': 'foobar',
//     },
//   })

//   return api
// }

export const api = ApiClient()
