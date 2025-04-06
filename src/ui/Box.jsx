import React from "react";

class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.style} className={this.props.className}>
                {this.props.title && <h1>{this.props.title}</h1>}
                {this.props.children}
            </div>
        );
    }
}

export default Box;