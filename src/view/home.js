import React, { Component } from 'react';
import logo from '../logo.svg';
import { Segment, Image } from 'semantic-ui-react'
import '../App.css';

class Home extends Component {
  // ImageExampleFluid = () => <Image src='./monster.jpg' size='small' />
  ImageExampleFluid = () => <Image src={require('./monster.jpg')} size='medium' centered  />

  
  render() {
    return (
      <div>
        <h1 class="ui header">Kitty's home</h1>
        <Segment>
          {this.ImageExampleFluid()}
          <p>
            Kitty likes to create Monster! *___*
          </p>
        </ Segment>
      </div>
    );
  }
}

export {Home};
