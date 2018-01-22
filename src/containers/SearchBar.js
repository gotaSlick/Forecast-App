import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props); 

        this.state = { term: ''}; //term for 'search term'.
        // the value of the input is mapped to this.state.term.
        // it's initialized to an empty string so that when the input first shows up,
        // it's gonna be an empty input.

        this.onInputChange = this.onInputChange.bind(this); // it says that
        // this, which is my instance of SearchBar has a function called onInputChange,
        // bind that function to (this) (which is SearchBar) and then replace onInputChange
        // with this new bound instance of this function underneath (onInputChange(event)).
        this.onFormSubmit = this.onFormSubmit.bind(this); //same
    }
    
    //all DOM event handlers (onChange, onClick, onHover..) come along with this 'event' object
    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({term: event.target.value});//sets the new state, whatever was typed in the input
    }

    onFormSubmit(event) {
        event.preventDefault(); //prevents the form from the default behavior (submiting the 
        //input by click enter for example). 
        //Fetching weather data by calling the fetchWeather Action Creator:
        this.props.fetchWeather(this.state.term); //pass in the actual city(the actual search term)
        this.setState({ term: '' });//sets the input to the empty string after a submit was done, so
        //it will cause the component to re-render and make the input field to clear out.  
    }
    
    // after initializing the state, I can update it over time here, using a
    // change handler on the input
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    //that's where it becomes a controlled component.
                    //First assign the value to it, so its value comes from this.state.term
                    //and then whenever someone changes this value, run the function onInputChange
                    value={this.state.term}
                    onChange={this.onInputChange} //Define this callback function on class SearchBar
                    //and then bind it to the SearchBar instance
                    /> 
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch); //calls the Action Creator, whenever it gets called
    //and returns an Action, bindActionCreators with dispatch makes sure that that Actions flow down into the 
    //Middleware and then the reducers inside of our Redux application.
} 

export default connect(null, mapDispatchToProps)(SearchBar);
