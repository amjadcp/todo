import axios from 'axios';

export const backendClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json',
  },
});