import axios, { AxiosInstance } from 'axios';

// Api real, eu colocaria na env
export const BASE_URL = 'https://jsonplaceholder.typicode.com';
export async function getAuthenticatedInstance(): Promise<AxiosInstance> {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
