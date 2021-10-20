import React from 'react';
import "./style.css";

class Jokesjoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
        }
    }

    getrandomJoke = async () => {
        const url = await (await fetch(`https://api.chucknorris.io/jokes/random`)).json();
         console.log(url.value);
         this.setState({ joke:url.value});
        // val.innerHTML=url.value;
    }
  

    getJokeByCategory = async (e) => {
        console.log(e);
        const jokereponse = await (await fetch(`https://api.chucknorris.io/jokes/random?category=${e.target.classList[1]}`)).json();
         console.log(jokereponse.value);
         this.setState({ joke:jokereponse.value});
        // val.innerHTML=url.value;
    }

    render() {

        return (
            <div>
        <div className="container">
            <div id="joke"className='joke'>
            {this.state.joke}
            </div>
            <button id="get_joke" className="btn " onClick={this.getJoke}>get another joke</button>
            <button id="get_joke" className="btn history" onClick={this.getJokeByCategory}>get history joke</button>
            <button id="get_joke" className="btn animal" onClick={this.getJokeByCategory }>get animal joke</button>
        </div>        
        </div>

            );
        }

    }

    export default Jokesjoke;