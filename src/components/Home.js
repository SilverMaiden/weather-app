import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton.js';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='column'>
                    <div className='item'>
                        <p className='title'>
                            Enter a City and State
                        </p>
                    </div>
                    <div className='item'>
                        <SearchBar />
                    </div>
                    <div className='item'>
                        <div className='button'>
                            <SearchButton />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
