import React, { Component } from 'react';

class GoogleMap extends Component {
    //first create a render method and return a single element (div) and give it a prop called ref 
    //and assign it a string of "map". This makes use of the ref (reference) system in react. A direct
    //reference to a html element that has been rendered to the page. So afer this component has been 
    //rendered to the screen I can get a direct reference to the div created right here by refering to 
    //this.refs.map
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;