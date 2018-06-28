import React, { Component } from 'react';
import RadioTipo from './components/RadioTipo';


class App extends Component {

  constructor(){
    super();
    this.state={
      tipo:"",
      lista:[]
    };
  }
  
  render() {
    return (
  <div>
        <h3>Escolha o tipo de pessoa que você deseja cadastrar: </h3>
        <RadioTipo />
        <br />
        <br />
       
    </div>
    );
  }
}


export default App;
