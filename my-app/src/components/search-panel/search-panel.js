import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render (){
        return (
            // Atributes in JSX named "properties"
            <input 
                className="form-control search-input"
                placeholder="type to search"
                    // В JSX атрибуты HTML class и for пишутся, как: className, htmlFor
                value = {this.state.term}
                onChange = {this.onSearchChange}
            />
        );
    }
}
