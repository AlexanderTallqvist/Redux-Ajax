import axios from 'axios';

const API_KEY = '6b6d3272e1dae3be81f7d5c31675b065';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATCHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fi`;

  // Redux-promise will turn this promise into an
  // response object
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
