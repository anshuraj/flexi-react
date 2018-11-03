import React, { Component } from 'react';
import Flexi from './Flexi';
import './App.css';

// Importing the config from a json file
import flexiConfig from './flexiConfig.json';

class App extends Component {
  onFlexiSubmit = data => {
    // process the data
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} />
      </div>
    );
  }
}

export default App;
