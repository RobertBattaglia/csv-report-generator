import React, { Component } from 'react';
import Form from './Form.jsx';

class App extends Component {
  render() {
    return (
      <div style={{ paddingLeft: '5%' }}>
        <h1>JSON &rarr; CSV</h1>
        <Form />
      </div>
    );
  }
}

export default App;
