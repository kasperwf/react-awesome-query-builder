import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo/demo.js';
import {CssBaseDecorator } from '@apex/shared-components/decorators';

class App extends Component {
  render() {
    return (
      <CssBaseDecorator>
        <div>{this.props.children}</div>
      </CssBaseDecorator>
    );
  }
}

ReactDOM.render((
  <App>
    <Demo />
  </App>
), document.getElementById('app'));
