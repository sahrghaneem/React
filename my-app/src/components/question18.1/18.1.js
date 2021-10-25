import React from 'react';

export const Paragph = ({text,lengthtext})=>{
    const[showalltext,setShowalltext]= React.useState(true);
    const toShow = text.substring(0, lengthtext) + "...";
    const readMore=()=>{
        setShowalltext(false)
    }

    const showLess=()=>{
        setShowalltext(true)
    }

return <div>{
   (text.length >lengthtext) && showalltext ?
     <div>{toShow} <button onClick={showalltext ? readMore : showLess}>Read More</button></div> : 
     <div>{text} <button onClick={showalltext ? readMore : showLess}>Show Less</button></div>
  
}</div>

}