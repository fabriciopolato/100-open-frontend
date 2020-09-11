import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const geoNamesApi = axios.create({
  baseURL: process.env.REACT_APP_GEO_NAMES_API_URL,
  params: {
    username: process.env.REACT_APP_USERNAME_GEO_NAMES,
    type: 'json',
    maxRows: 10,
    featureClass: 'P',
  },
});
