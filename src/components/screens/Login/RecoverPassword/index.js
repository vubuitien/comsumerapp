import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import {
    TopBar,
    BottomCreateSignUp
} from '../../../shared';
import I18n from '../../../../I18n';
import {
  tcombForm
} from '../../../higher_order';
import fields from './fields';

@tcombForm(fields)
class RecoverPassword extends Component {
    static navigationOptions = { title: 'RecoverPassword', header: null };

    constructor(props) {
      super(props);
      this.onNextStep = this.onNextStep.bind(this);
    }

    onNextStep() {
      this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar
                    name={'arrow-left'}
                    title={I18n.t('login.recover_password.title_header')}
                    onPress={() => this.props.navigation.goBack()}
                    cancel={I18n.t('login.recover_password.cancel')}
                    style={styles.headerBar}
                />
                <View style={styles.boxUsername}>
                    {this.props.inputs.recoverpassword}
                    <BottomCreateSignUp
                      style={styles.buttonRecover}
                      title={I18n.t('login.recover_password.password')}
                      name={I18n.t('login.recover_password.recover')}
                      color={'#fff'}
                      hasShowTitle
                      onPress={this.onNextStep}
                    />
                </View>
            </View>
        );
    }
}
export default RecoverPassword;
