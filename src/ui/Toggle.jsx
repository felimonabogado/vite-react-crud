import React from "react";

class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            active: false,
        };
    }

    toggleBox = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        return (
            <div className="collapsable-box" onClick={this.toggleBox}>
                <h1>{this.props.title}</h1>
                 {this.state.active ? this.props.children : null}
            </div>
        );
    }
}

export default Toggle;