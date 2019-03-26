import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import { TextField } from '@apex/shared-components/text-field';

export default class TextWidget extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    config: PropTypes.object.isRequired,
    value: PropTypes.string,
    field: PropTypes.string.isRequired,
    customProps: PropTypes.object,
  };

  shouldComponentUpdate = shallowCompare;

  handleChange = () => {
    this.props.setValue(ReactDOM.findDOMNode(this.refs.text).value);
  }

  render() {
    let customProps = this.props.customProps || {};

    return (
        <TextField
          key="widget-text"
          ref="text"
          type={"text"}
          value={this.props.value}
          label={this.props.placeholder}
          onChange={this.handleChange}
          multiline={false}
          {...customProps}
        />
    );
  }
}
