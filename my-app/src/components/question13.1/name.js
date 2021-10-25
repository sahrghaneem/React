import UserData from "./user"
import React from 'react';

class Dataname extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const username= getnames();
           return(
        
            <div>{username}
            </div>
    
    
           );  
}
}

export default Dataname;