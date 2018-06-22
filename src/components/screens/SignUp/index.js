import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import {

} from '../../shared';
import I18n from '../../../I18n';
import {
  tcombForm
} from '../../higher_order';
import fields from './fields';

@tcombForm(fields)
class SignUp extends Component {
  static navigationOptions = { title: 'SignUp', header: null };

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <View style={styles.container}>
          <Text>Sign Up</Text>
          <View style={styles.boxSignUp}>
            {this.props.inputs.username}
            {this.props.inputs.email}
            {this.props.inputs.password}
            {this.props.inputs.confirmpassword}
          </View>
        </View>
      );
    }
}

export default SignUp;
