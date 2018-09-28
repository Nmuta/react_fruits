import React from 'react';
import './App.css';

const Footer = (props) =>{
  return(<footer> {props.copyright} {props.nombre}</footer>);
}

export default Footer;
