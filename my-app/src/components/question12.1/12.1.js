import React from 'react';
import "./style.css";

class Jokesjoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
        }
    }

 getJoke = async () => {
        const url = await (await fetch(`https://api.chucknorris.io/jokes/random`)).json();
         console.log(url.value);
         this.setState({ joke:url.value});
        // val.innerHTML=url.value;
    }
    history = async () => {
        const history = await (await fetch(`https://api.chucknorris.io/jokes/random?category=history`)).json();
         console.log(history.value);
         this.setState({ joke:history.value});
        // val.innerHTML=url.value;
    }

    categories = async () => {
        const animal = await (await fetch(`https://api.chucknorris.io/jokes/random?category=animal`)).json();
         console.log(animal.value);
         this.setState({ joke:animal.value});
        // val.innerHTML=url.value;
    }

render() {

    return (
        <div>
    <div className="container">
        <div id="joke"className='joke'>
        {this.state.joke}
        </div>
        <button id="get_joke" className="btn" onClick={this.getJoke}>get another joke</button>
        <button id="get_joke" className="btn" onClick={this.history}>get history joke</button>
        <button id="get_joke" className="btn" onClick={this.categories}>get animal joke</button>

    </div>        
    </div>

         );
    }

}

export default Jokesjoke;