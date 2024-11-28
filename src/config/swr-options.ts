import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios'
import { IMovie } from '~/types'
import { api } from '../api'

export type SWRWithInfo<T = any> = {
  data: T
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
  status: number
  total_pages: number
  total_results: number
}

export const fetcherWithInfo = async (url: string): Promise<SWRWithInfo> => {
  const { data, headers, status } = await api.get(url)
  const { total_pages, total_results } = data

  return { data, headers, status, total_pages, total_results }
}