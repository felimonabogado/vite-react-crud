import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.symbols = {
            plus: "+",
            minus: "-",
        }
        this.state = {
            count: this.props.initialCount ? parseInt(this.props.initialCount) : 0,
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    render() {
        return (
            <div className="number-counter">
                <h1>{this.props.title} {this.state.count}</h1>
                <button onClick={this.decrementCount} disabled={this.state.count <= 0 ? true : false }>{this.symbols.minus}</button>
                <button onClick={this.incrementCount} disabled={this.state.count >= 100 ? true : false }>{this.symbols.plus}</button>
            </div>
        );
    }
}

export default Counter;