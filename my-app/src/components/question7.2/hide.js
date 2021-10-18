import React from 'react';
import "./style.css";

class Hide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      show: true
    }
  }

  clickClick = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  }

  render() {
    return (
      <div>
   
        <button onClick={this.clickClick}>
          { this.state.show ? 'Hide box' : 'Show box' }</button>
          { this.state.show ? (<div className='box'></div>) : '' }
      </div> 
    );
  }
}

export default Hide;