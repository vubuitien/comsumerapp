import React, { Component } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BoxAdd extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style}>
        <Icon name={this.props.iconName} color={this.props.color} size={this.props.size} />
      </TouchableOpacity>
    );
  }
}
