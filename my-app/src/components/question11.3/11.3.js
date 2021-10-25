import React from 'react';
import "./style.css";

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Age: '',
            FreeText: '',
        }

    }
    handleNameChange = (e) => {
        this.setState({
            FirstName: e.target.value
        })
    }
    handleFreeTextChange = (e) => {
        this.setState({
            FreeText: e.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" value={this.state.FirstName} onChange={this.handleNameChange} />

                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={this.state.LastName} onChange={this.handleNameChange} />

                </div>
                <div>
                    <label>Age</label>

                </div>
                <div>
                    <label>Free Text</label>
                    <textarea  value={this.state.FreeText} onChange={this.handleFreeTextChange}></textarea>
                </div>
            </form>
        );
    }
}