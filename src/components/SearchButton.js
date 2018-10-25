import React, { Component } from 'react';
import '../App.css';
import { SearchInput, Button } from 'evergreen-ui';

class SearchButton extends Component {
    render() {
        return (
            <div>
                <Button intent="success">
                    Get Weather
                </Button>
            </div>
        )
    }
}

export default SearchButton;
