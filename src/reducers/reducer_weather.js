import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { // initial state default to empty array, and the 2nd arg is always action
//console.log('Action received', action);
//we'll want to store all our pieces of weather data in an array. so the data structure is gonna be a list.
//we set up a switch statement to handle only the fetchWeather Action type.
switch (action.type) {
    case FETCH_WEATHER: 
        // we handle the payload here (the data that we car about). And so we return it in an array
        return [ action.payload.data, ...state ]; //this returns only 1 city, but not building a list of them yet.
        //So we have to add it on the existing state, not replace the existing state. 
        //WE CAN NOT MUTATE THE STATE, WE MUST RETURN A COMPLETELY NEW INSTANCE OF STATE. So instead of doing push, 
        //we can concat the existing array of cities with a new array that contains  
        //a new city: return state.concat([action.payload.data]); //same as the ES6 one above.
}

return state;
}