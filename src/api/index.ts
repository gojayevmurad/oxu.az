import axios from 'axios'

const clientFree = axios.create({
  baseURL: 'http://localhost:3000'
})
const searchInstance = axios.create({
  baseURL: 'http://localhost:3500/'
})

clientFree.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

searchInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export { clientFree, searchInstance }
