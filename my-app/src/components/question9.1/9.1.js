import React from 'react';
import Spinner from './spinner';

class Spain extends React.Component {
    constructor() {
        super();
        this.state = {
            isloading: false,
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ isloading: !this.state.isloading });
        }, 2000);
    };


    render() {
        return (
            <div style={{ marginTop: '60px' , display:this.state.isloading ? 'none' : 'block'}}>
                <Spinner/> 
          </div>

        );
    }
}
export default Spain;