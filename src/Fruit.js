import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './fruits';
import Orange from './Orange.png';
import Mango from './Mango.png';
import Apple from './Apple.png';
import Peach from './Peach.png';



class Fruit extends Component {

  render() {

   try{
     const imageURL = require('./' + this.props.fruit.name +  '.png')
     return (
       <div className="fruit_box">
          <div>
            {this.props.fruit.name}
          </div>
          <div>
            <img className="fruit" src={imageURL} />
          </div>
       </div>
     );
   } catch (e){
     return (
       <div className="fruit_box">
          <div>
            {this.props.fruit.name}
          </div>
       </div>
     );
   }
  }
}

export default Fruit;
