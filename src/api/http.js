import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5f96a3b134c55d14fda96e5a/api/v1'

axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res.data)
  }
  return res.data;
}, (error) => {
  return Promise.reject(error.response)
})

export default axios