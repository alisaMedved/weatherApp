import React, {useReducer} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getCurrentWeather} from "../api/api";

const initState = {
    city: "",
    country: ""
};

const reducer = (prevState, updatedPropeties) => (
    {...prevState, ...updatedPropeties}
);

const WeatherAppContainer = () => {
    const [state, setState] = useReducer(reducer, initState);

    const handleChange = (event) => {
       setState({[event.target.name]: event.target.value})
    };

    const getWeatherToday = (e) => {
        getCurrentWeather(state.city, state.country)
            .then(data => console.log(data));
        e.preventDefault();
    };

    window.state = state;
    return (
        <div>
            <form onSubmit={(e) => getWeatherToday(e)}>
                <div>
                <TextField
                    label="City"
                    value={state.name}
                    onChange={event => handleChange(event)}
                    name="city"
                />
                <TextField
                    label="Country"
                    value={state.country}
                    onChange={event => handleChange(event)}
                    name="country"
                />
                </div>
                <div>
                <Button type="submit">
                    Узнать погоду
                </Button>
                </div>
            </form>
        </div>
    );
};

export default WeatherAppContainer;


