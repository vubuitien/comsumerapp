import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Image from 'react-native-remote-svg';
import { styles } from './styles';
import {

} from '../../../shared';
import I18n from '../../../../I18n';

class SecondScreen extends Component {
  static navigationOptions = { title: 'SecondScreen', header: null };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>GetMore</Text>
          <Text style={styles.contentHeader}>RESERVATIONS</Text>
          <Text style={styles.secondContentHeader}>DEALCOINS</Text>
        </View>
        <View style={styles.share}>
          <View style={styles.leftShare} />
          <View style={styles.rightShare}>
            <Text>Share</Text>
            <Text>with your contacts and</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default SecondScreen;
