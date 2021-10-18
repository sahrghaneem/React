import React from "react";

const data = ["hello", "world"];
const number1 = 5, number2 =6;
const string = "I love React!",
stringLength = string.length; 


const Sahr =() => {
    return(
        <div>
            {
                data.join(" ")
            }

            <br/>
            {
                `${number1}+${number2}=${number1+number2}`

            }
            <br/>
            {
                  <span>{`The string’s length is: ${stringLength}`}</span>
                  //stringLength
            }


        </div>
    )
}
export default Sahr ;