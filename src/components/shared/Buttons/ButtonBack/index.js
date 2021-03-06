import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class ButtonBack extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.props.style}>
          <View style={styles.buttonArrow}>
            <View style={[styles.iconButton, { backgroundColor: this.props.color }]}>
              <Icon style={styles.icon} name={this.props.iconName} size={this.props.iconSize} />
            </View>
            <View style={styles.text}>
              <Text style={[styles.buttontext, { color: this.props.color }]}>{this.props.title}</Text>
              <Text style={[styles.childText, { color: this.props.color }]}>{this.props.childText}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ButtonBack;
