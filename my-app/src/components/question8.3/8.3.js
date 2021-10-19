import React from 'react';
import "./style.css";

class Circle extends React.Component {
    constructor() {
     super();
     this.state = {
      show: false,
      }
   }
  
componentDidMount = () => {
    setTimeout(() => {
      this.setState({ show: true});
    }, 2500);
  };

  render() {
   return (
      <div>
        <div className='box' style={{borderRadius:this.state.show ?'100%' : '0%'  }}></div>
      </div>
    );
   }
  }

export default Circle;