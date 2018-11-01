import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexi from './flexiComponent';

class App extends Component {

    onFlexiSubmit = () => { console.log("form submitted")};
  render() {
      const flexiConfig = {
  items: [
  {
  "name": "person_name",
  "label": "Person's Name",
  "type": "TextField"
  },
  {
  "name": "states",
  "label": "Person's state",
  "type": "DropDown",
            "values": [
                 "Maharashtra",
                 "Kerala",
                 "Tamil Nadu"]
  }]
  };
    return (
      <div className="App">
     <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
      </div>
    );
  }
}

export default App;
