import axios from './http.js'
import {Doc} from '@/types/index.d.ts'

interface Params {
  type?: string;
  page?: number;
  size?: number
}

export const getProject = (params?: Params) => {
  return axios.get('/project', {
    params: params
  })
}

export const newProject = (params: Doc) => {
  return axios.post('/project', params)
}


