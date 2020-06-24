import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react'
import CustomLayout from './CustomLayout'
import logo from './logo.svg';
import './App.css';
import 'swagger-ui-react/swagger-ui.css';

const DOM_ID = "swagger-ui-mountpoint"

class App extends Component {
  render() {
    return (
      <SwaggerUI url={"http://petstore.swagger.io/v2/swagger.json"}></SwaggerUI>
    );
  }
}

export default App;
