import React from 'react';

class Stack extends React.Component {
    render() {
        console.log(this.props.term);
        return (
            <div>
                <br />
                <div style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "yellow",
                    border: "2px solid red"
                }}>
                    {this.props.term}
                </div>
            </div>
        );
    }
};

export default Stack;