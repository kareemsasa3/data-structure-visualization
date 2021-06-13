import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Stack from './components/Stack';

class App extends React.Component {
    state = { term: "" }

    onSearchSubmit = (term) => {
        this.setState({
            term: term
        })
    }

    render() {
        return (
            <div>
                <Header title="Stack Visualization" />
                <SearchBar onSubmit={this.onSearchSubmit} />
                <Stack term={this.state.term} />
            </div>
        );
    }
}

export default App;