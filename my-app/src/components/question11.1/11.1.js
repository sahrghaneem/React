import React from 'react';
import  BtnColor from './btn';
const colors = ["blue", "red", "yellow"];

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choseColor: ""
    };
  }

  onColorClick = (color) => {
    this.setState({ choseColor: color });
  };

  render() {
    return (
    <>
    <div>the color selcted is :<span style={{ color: this.state.choseColor }}> {" "}
            {this.state.choseColor}{" "}</span></div>
    
    {colors.map((color, index) => {
    return (
        <BtnColor method={this.onColorClick} color={color} key={index}/>
          );
    })}

      </>
    );
  }
}

export default ChangeColor;