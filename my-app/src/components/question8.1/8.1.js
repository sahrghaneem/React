import React from 'react';


class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favoriteColor:'black'
      }
    }

    componentDidMount = () => {
        setTimeout(() => {
          this.setState({ favoriteColor: "pink" });
        }, 1000);
      };
    
    componentDidUpdate =()=>{
        document.querySelector("#changeColors").innerHTML=`The updated favorite color is ${this.state.favoriteColor}`

      }

    render() {
        return (
          <div>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <div id='changeColors'></div>
          </div>
        );
      }
    }    
    export default Color;