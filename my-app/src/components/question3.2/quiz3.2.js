import "./style.css";
import React from "react";
import Q1 from "./q1"

function Quiz() {
   
    return (
        <div className="quiz">
            {
                <h1>How Do You Like Front End?</h1>
            }
           <br/>
           { 
             <Q1/>
           }
           {
               <h3>What is your favourite front end feature topic?</h3>
           }
           {
               <textarea></textarea>
           }
     
        </div>
    );
}

export default Quiz ;