import React from "react";
import CheckFun from "./check";

function CheckBox() {
    const [check, setCheck] = React.useState(["one", "two", "three", "four", "five"])  
    const [selected,setSelected] = React.useState([])
    
const handelClick =(value)=>{
    let select = [...selected]
    if(select.includes(value)){
        setSelected(select.filter(val =>{
            return val !== value
        }))
    
    }
    else{
        select.push(value)
        setSelected(select)
    }  
}
const handelDelete = ()=>{
  let result = check.filter(element=>{
      return !selected.includes(element)
  })
  setCheck(result)
  setSelected([])
}
const handelReset = ()=>{
    setCheck(["one", "two", "three", "four", "five"])
}

    return (
        <div>
            {console.log('selected',selected)}
             <input type={'button'} value={'Delete'} onClick={handelDelete}/>
             <input type={'button'} value={'Reset'} onClick={handelReset}/>
            
            {
                check.map(val => {
                    return (
                        <div>
                            <CheckFun value={val} buttonIschecked={handelClick} isChecked={selected.includes(val)} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CheckBox