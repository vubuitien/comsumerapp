import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class BottomCreateSignUp extends Component {
  render() {
    let text_title;
    if (this.props.hasShowTitle) {
        text_title = (
          <Text style={[styles.creatTitle, { color: this.props.color }]}>{this.props.title}</Text>
        );
    } else {
        text_title = <View />;
    }
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress} >
        <View style={styles.savebutton}>
          <Text style={[styles.creat, { color: this.props.color }]}>{this.props.create}</Text>
          <Text style={[styles.name, { color: this.props.color }]}>{this.props.name}</Text>
          {text_title}
        </View>
      </TouchableOpacity>
    );
  }
}
export default BottomCreateSignUp;
