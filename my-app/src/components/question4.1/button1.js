import React from "react";
const Button =(txt) => {
    
      let impo= txt==="important";
      return(
  
   <input type="button" value={txt}/>
   
    )
}

export default Button ;