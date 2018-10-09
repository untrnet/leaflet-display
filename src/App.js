import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInverted: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isInverted: false });
    }, 2000);

    setInterval(() => {
      this.setState({ isInverted: true });
    }, 6500);
  }

  render() {
    return (
          <div className={this.state.isInverted ? "App-invert" : "App"}>
      <div>
        <h1>TAKE A LEAFLET</h1>
      </div>
    </div>
    );
  }
}

export default App;
