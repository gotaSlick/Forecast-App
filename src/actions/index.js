import axios from 'axios';

const API_KEY = 'f8d83b019e8f2b8b229a23bd7827324e';
//backticks ${} are part of ES6 syntax (template strings)
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//convention to make a variable that holds that Action type, so that there's no need to copy-paste strings
export const FETCH_WEATHER = 'FETCH_WEATHER';

//This Action Creator contains a request to the backend API.
export function fetchWeather(city) {
    //the request url (from docs on http://openweathermap.org/forecast5)
    const url = `${ROOT_URL}&q=${city},us`;
    //ajax request
    const request = axios.get(url); //Takes the url with the search city 
    //and makes a get request on it. This request will return a promise and will be passed into 
    //the Action return as the payload.
    //console.log('Request:', request);
    //I pass the promise into the Action's payload property (request)
    return {
        type: FETCH_WEATHER,
        payload: request//returning the promise (the request) as the payload 
    };
}
