import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import map from 'lodash/map';
import {getFieldConfig} from '../../utils/configUtils';
import {calcTextWidth} from '../../utils/stuff';
// import { Select } from 'antd';
// const Option = Select.Option;
import shallowCompare from 'react-addons-shallow-compare';
import { Select } from '@apex/shared-components/select';

export default class SelectWidget extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired,
    value: PropTypes.string, //key in listValues
    customProps: PropTypes.object,
  };

  shouldComponentUpdate = shallowCompare;

  handleChange = (event) => {
    const val = event.target.value;
    this.props.setValue(val);
  }

  filterOption = (input, option) => {
    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }

  render() {
    // let size = this.props.config.settings.renderSize || "small";
    let placeholder = this.props.placeholder || "Select option";
    const fieldDefinition = getFieldConfig(this.props.field, this.props.config);
    const options = map(fieldDefinition.listValues, (label, value) => {
      return { label, value };
    });
    // let customProps = this.props.customProps || {};

    return (
        <Select
          data-testid="testid"
          required={true}
          options={options}
          onChange={this.handleChange}
          label={placeholder}
          value={this.props.value}
        />
    );
  }
}
