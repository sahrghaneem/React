
import React from "react";

const Check =({value,buttonIschecked,isChecked})=>{
    const clickhandler=()=>{
        buttonIschecked(value)
        setCheck(!check)
        console.log(check);
    }
    return( 
         <div>
       <li ><input type={'checkbox'} onClick={clickhandler} value={value}  checked={isChecked}/> {value}</li>
    </div>
)
}

export default Check