import React from 'react';

const Header = props => {
    return (
        <h1 style={{ color: 'yellow', backgroundColor: 'green' }}>{props.title}</h1>
    );
};

export default Header;