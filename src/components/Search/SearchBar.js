import React, { Component } from 'react';
import '../../App.css';
import { SearchInput, Button } from 'evergreen-ui';
import SearchButton from './SearchButton';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchinput: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            return {
                searchinput: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.searchinput
        );
    }
    render() {
        return (
            <form className={this.props.direction} onSubmit={this.handleSubmit}>
                <div className='item'>
                    <SearchInput
                        type='text'
                        placeholder="St. George, Utah"
                        value={this.state.searchinput}
                        autoComplete='off'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='item'>
                    < SearchButton />
                </div>

            </form>
        )
    }
}

export default SearchBar;
