import React, {Component} from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: '', file : 'test'};
    }
    render() {
        //return <input onChange={this.onInputChange} />;
        return ( 
            <div>
                <input onChange={event => (this.setState({term : event.target.value}) )} />
            </div> 
        );
    }

    onInputChange (event) {
        console.log(event.target.value);
    }
}

export default SearchBar;