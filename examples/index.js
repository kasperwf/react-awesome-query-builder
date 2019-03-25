import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo/demo.js';

class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

ReactDOM.render((
  <App>
    <h1>Hej</h1>
  </App>
), document.body);
