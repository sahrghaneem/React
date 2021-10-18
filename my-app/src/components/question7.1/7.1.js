import React from 'react';

class StateEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    }
  }

  incrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  clickClick = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementItem}>increment</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default StateEx;
