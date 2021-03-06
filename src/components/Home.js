import React, { Component } from 'react';
import SearchBar from './Search/SearchBar';
import NavBar from './NavBar';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='container'>
                    <div className='column'>
                        <div className='item'>
                            <p className='title'>
                                Enter a City and State
                            </p>
                        </div>
                        <SearchBar
                            direction = 'column'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
