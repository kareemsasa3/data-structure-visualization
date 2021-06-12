import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    <button type="button">PUSH</button>
                    <button type="button">POP</button>
                    <button type="button">CLEAR</button>
                    <br />
                </form>
            </div>
        );
    }
};

export default SearchBar;