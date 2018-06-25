import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { styles } from './styles';

export default class BoxTextInput extends Component {
  render() {
    const margin = this.props.margin ? 0 : 10;
    return (
      <View style={[styles.container, { marginBottom: margin }]}>
        {this.props.children}
      </View>
    );
  }
}
