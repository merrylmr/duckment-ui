import ajax from './http.js'

export  const getProject = (params) => {
  return ajax.get('/project', {
    params: params
  })
}