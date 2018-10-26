import React, { Component } from 'react';
import '../../App.css';
import { SearchInput, Button } from 'evergreen-ui';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <SearchInput
                    placeholder="St. George, Utah"
                />
            </div>
        )
    }
}

export default SearchBar;
