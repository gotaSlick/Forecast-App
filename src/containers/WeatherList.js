import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {

    //this function is for rendering a single city (a singe row):
    renderWeather(cityData) {
        const name = cityData.city.name; //make the code dryer. 
        //assigning names for wished data:
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273); 
        // _.map  (temp)=> temp -273 for Celcius conversion
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return (// to fix the key error Each child in an array or iterator should have a unique "key", add a unique key
        //to the top element of the list (Rule of adding key to React list):  (in my case city's name is unique, so why not)
            <tr key={name}>
                <td>{name}<br/><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="blue" units="C" /></td>
                <td><Chart data={pressures} color="black" units="hPa" /></td>
                <td><Chart data={humidities} color="green" units="%" /></td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; //comes from reducers/index.js, where we assigned the WeatherReducer to the weather key.
}

export default connect(mapStateToProps)(WeatherList);