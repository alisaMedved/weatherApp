import * as axios from "axios";

const apiKey = '3c227259425e4cb6ad8379c922bd8a87';
//
export const getCurrentWeather = (cityName, country) => {
    return axios.get(`http://api.weatherbit.io/v2.0/current?city=${cityName}&country=${country}&key=${apiKey}`, null)
        .then(response => response.data);
};


