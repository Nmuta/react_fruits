import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './fruits';
import Fruit from './Fruit';
import Footer from './Footer';

const copyright = `copyright 2018`;
const nombre = "Dan Phonelath";



class App extends Component {
  constructor(props){
    super(props);
    this.state={fruits: fruits, new_fruit: ""}
    this.addFruit = this.addFruit.bind(this);
    this.captureFruitChange = this.captureFruitChange.bind(this);
  }

  captureFruitChange(e){
    this.setState({new_fruit: e.target.value});
    e.preventDefault();
  }

  addFruit(){
    let current_fruits  = this.state.fruits;
    let nu = {name: this.state.new_fruit, price: "$1.50", origin: "Florida"};
    current_fruits.push(nu);
    this.setState({fruits: current_fruits});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
         <div>
           new fruit: {this.state.new_fruit}
         </div>
         <button onClick={this.addFruit}>add fruit</button>
         <div>
           <input onChange={this.captureFruitChange}/>
         </div>
        <p className="App-intro">
            {this.state.fruits.map(fruit => <Fruit fruit={fruit} /> )}
        </p>
        <Footer copyright={copyright}  nombre={nombre}/>

      </div>
    );
  }
}

export default App;
