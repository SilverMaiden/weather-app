import React, { Component } from 'react';
import SearchBar from './Search/SearchBar';
import SearchButton from './Search/SearchButton';
import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li id='first'><h1> Clever Title</h1></li>
                    <li>
                        <SearchBar />
                    </li>
                    <li>
                        <SearchButton />
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
