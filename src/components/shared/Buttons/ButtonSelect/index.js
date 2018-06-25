import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default class ButtonSelect extends Component {
  render() {
    const styleSelect = !this.props.selected ? styles.styleSelect : styles.styleSelectActive;
    const styleTextSelect = !this.props.selected ? styles.styleTextSelect : styles.styleTextSelectActive;
    return (
      <View style={styleSelect}>
        <Icon name={this.props.nameIcon} style={styleTextSelect} />
      </View>

    );
  }
}
