import axios from 'axios';
import {Config, API_KEY} from '../Config';

export const WAxios = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    api_key: API_KEY,
  },
  timeout: 30000,
});
