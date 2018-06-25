import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles'
import {
  TextInputData
} from '../../../shared';

export default class Row extends Component {
  render() {
    let information;
    if (this.props.hasInput) {
      information = (
        <TextInputData
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          text={this.props.text}
          style={this.props.textInput}
          placeholderColor={this.props.color}
        />
      );
    } else {
      information = (
        <Text style={styles.title}>{this.props.title}</Text>
      );
    }
    return (
      <View style={styles.container}>
        <Icon name={this.props.iconName} style={styles.icon} />
        {information}
      </View>
    );
  }
}
