import React, { Component } from 'react';
import SearchBar from './Search/SearchBar';
import SearchButton from './Search/SearchButton';
import '../App.css';

const barStyle = {
    className: 'row'
};
class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li id='first'><h1> Clever Title</h1></li>
                    <li>
                        <SearchBar
                            direction = 'row'
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
