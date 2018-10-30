import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        alert('a location was submitted: ' + this.state.searchinput);
        event.preventDefault();
    }
    render() {
        var match = this.props.match;
        return (
            <form onSubmit={this.handleSubmit} className={this.props.direction} >
                <div className='item'>
                    <SearchInput
                        id = 'searchinput'
                        type='text'
                        placeholder="St. George, Utah"
                        value={this.state.searchinput}
                        autoComplete='off'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='item'>
                    <Link
                        to={{
                            pathname: '/forecast',
                            search:'?' + 'city=' + this.state.searchinput
                        }}>
                        < SearchButton
                            isDisabled={!this.state.searchinput}
                        />
                    </Link>
                </div>
            </form>
        )
    }
}


export default SearchBar;
