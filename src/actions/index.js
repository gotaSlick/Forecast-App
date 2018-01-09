import axios from 'axios';

const API_KEY = 'f8d83b019e8f2b8b229a23bd7827324e';
//backticks ${} are part of ES6 syntax (template strings)
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//convention to make a variable that holds that Action type, so that we don't have to copy-paste strings
//between our files (cause if a typo error in the string, the bug is more difficult to find than when it's in a variable)
export const FETCH_WEATHER = 'FETCH_WEATHER';

//This Action Creator contains a request to the backend API.
export function fetchWeather(city) {
    //the request url (from docs on http://openweathermap.org/forecast5)
    const url = `${ROOT_URL}&q=${city},us`;
    //the actual ajax request:
    const request = axios.get(url); //takes the url that we just crafted with the very search city 
    //and make a get request on it. this request will return a promise. We'll pass this request into 
    //the Action return as the payload.
        //console.log('Request:', request);

    //This is the promise, we pass that promise into the Action's payload property (request)
    return {
        type: FETCH_WEATHER,
        payload: request//we r returning the promise (the request) as the payload, IMPORTANT! 
    };
}