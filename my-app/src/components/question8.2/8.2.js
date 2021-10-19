import React from 'react';
import "./style.css";

class Slidebox extends React.Component {
    constructor() {
     super();
     this.state = {
      slidebox: true,
      }
  
   }
  
   componentDidMount = () => {
    setTimeout(() => {
      this.setState({ slidebox: true});
    }, 1000);
  };

componentDidUpdate=()=>{
  setTimeout(() => {
  this.setState({ slidebox: !this.state.slidebox});
},4000);
};
  render() {
   return (
    
      <div>
        { this.state.slidebox ? (<div className='box'></div>) : '' }
        { this.state.slidebox ? (<div className='box2'></div>) : '' }
        { this.state.slidebox ? (<div className='box3'></div>) : '' }
      </div>
    );
   }
  }

export default Slidebox;