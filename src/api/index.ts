import axios from 'axios'
import { configEnv as env } from '~/config/env'

export const api = axios.create({
  baseURL: env.TMDB_BASE_URL,
  params: {
    api_key: env.API_KEY,
    language: 'pt-BR'
  }
})