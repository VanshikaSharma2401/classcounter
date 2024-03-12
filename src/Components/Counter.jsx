import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      initialValue: prevState.initialValue + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      initialValue: prevState.initialValue - 1
    }));
  };

  render() {
    const { initialValue } = this.state;

    return (
      <div>
        <div>
          Count: {initialValue}
        </div>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
