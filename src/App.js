import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui'
import CustomLayout from './CustomLayout'
import logo from './logo.svg';
import './App.css';
import 'swagger-ui/dist/swagger-ui.css';

const DOM_ID = "swagger-ui-mountpoint"

const CustomLayoutPlugin = {
  // package our CustomLayout component into a plugin,
  // so Swagger-UI can use it
  components: {
    CustomLayout: CustomLayout
  }
}

class App extends Component {
  componentDidMount() {
    SwaggerUI({
      dom_id: `#${DOM_ID}`,
      url: "http://petstore.swagger.io/v2/swagger.json",
      plugins: [
        CustomLayoutPlugin
      ],
      layout: "CustomLayout"
    })
  }
  render() {
    return (
      <div className="App">
        <div id={DOM_ID} />
      </div>
    );
  }
}

export default App;
