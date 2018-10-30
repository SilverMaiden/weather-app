import React, { Component } from 'react';
import queryString from 'query-string';
import NavBar from './NavBar';
import axios from 'axios';
import '../App.css';

class Forecast extends Component {
    componentDidMount() {
        var searchinput = queryString.parse(this.props.location.search);
        console.log(searchinput);
        var API_KEY = "4696f1507cbc6fc2ccf45174a84faca4";
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + searchinput['city'] + '&APPID=' + API_KEY)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}

export default Forecast;
