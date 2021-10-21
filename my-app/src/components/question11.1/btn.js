import React from "react";

const BtnColor = ({ color, method }) => {
  return (
    <div>
      <input onClick={() => method(color)} type="button" value={color}/>
    </div>
  );
};

export default BtnColor;