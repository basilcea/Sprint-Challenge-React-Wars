import React, { Component } from "react";
import WarsList from "./components/StarWarsList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next:null,
      previous:null,
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results ,
          next: data.next ,
          previous:data.previous,
        });
        console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  nextPage = ()=>{
    return this.getCharacters(this.state.next)

  }
  previousPage =() =>{
    return this.getCharacters(this.state.previous)


  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <WarsList list={this.state.starwarsChars}  nextPage={this.nextPage}  previousPage ={this.previousPage} />
      </div>
    );
  }
}

export default App;
