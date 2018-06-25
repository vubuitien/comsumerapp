import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BoxArrow extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Icon name={this.props.iconName} color={this.props.color} size={this.props.size} />
      </View>
    );
  }
}
