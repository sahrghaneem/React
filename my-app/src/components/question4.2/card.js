import React from "react";

const Card =({imge,title,descrption,link}) => {

return(

<div className="card__media">

<div>
<img src={Image} width={300} height={'50%'}>
</div>

<div className={'card-bottom'}>
    <p>{title}</p>
    <p>{descrption}</p>
    
    <div className={'links'}>
<a href={link}>link</a>

    </div>

</div>
</div>


)
}

export default Card