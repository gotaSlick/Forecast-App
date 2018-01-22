import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { // initial state default to empty array, and the 2nd arg is always action
//console.log('Action received', action);
//store all the pieces of weather data in an array. so the data structure is gonna be a list.
//set up a switch statement to handle only the fetchWeather Action type.
switch (action.type) {
    case FETCH_WEATHER: 
        // handle the payload here (the data that I need). And return it in an array
        return [ action.payload.data, ...state ]; //this returns 1 city, not building a list of them yet.
        //I have to add it on the existing state, not replace the existing state. 
        //RULE: CANNOT MUTATE THE STATE, MUST RETURN A COMPLETELY NEW INSTANCE OF STATE.
        //So concat the existing array of cities with a new array that contains  
        //a new city: return state.concat([action.payload.data]); //same as the ES6 one above.
}

return state;
}
