import React, { Component } from 'react';
import propTypes from 'prop-types';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

App.propTypes = {
  message: propTypes.string.isRequired
}

export default App;
