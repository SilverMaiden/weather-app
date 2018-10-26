import React, { Component } from 'react';
import '../../App.css';
import { SearchInput, Button } from 'evergreen-ui';
import SearchBar from './SearchBar'

class SearchButton extends Component {
    render() {
        return (
            <div>
                <Button className='button' appearance='primary' intent="success" type='submit'>
                    Get Weather
                </Button>
            </div>
        )
    }
}

export default SearchButton;
