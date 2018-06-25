import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
// import { Mutation } from 'react-apollo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-remote-svg';
import { styles } from './styles';
import {
  ButtonSignin,
  ButtonLogin,
  TextPassword,
  BottomCreateSignUp
} from '../../shared';
// import loginMutation from './mutations';
import I18n from '../../../I18n';
import {
  tcombForm
} from '../../higher_order';
import fields from './fields';

@tcombForm(fields)
class Login extends Component {
  constructor(props) {
    super(props);
    this.onSignupPress = this.onSignupPress.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderCreateAccount = this.renderCreateAccount.bind(this);
    this.renderMerchant = this.renderMerchant.bind(this);
    this.onPress = this.onPress.bind(this);
  }
  //
  // async onLogin(values, context) {
  //   await context.loginMutation({ variables: { email: values.email, password: values.password } })
  //   .then(async result => {
  //     await Promise.all([
  //       AsyncStorage.setItem('token', result.data.loginMerchant.token),
  //       this.props.showOverlaySuccess()
  //     ]).then(() => {
  //       this.props.navigation.navigate('Offer');
  //     });
  //   }).catch(() => {
  //     this.props.hideOverlay();
  //     setTimeout(() => {
  //       Alert.alert('Notice', I18n.t('login.merchant_invalid'));
  //     }, 20);
  //   });
  // }

  onSignupPress() {
    this.props.navigation.navigate('FirstScreen');
  }

  onPress() {
    this.props.navigation.navigate('SignUp');
  }

  renderMerchant() {
    return (
      <View style={styles.merchant}>
        <View style={styles.leftMerchant}>
          <Text style={styles.textMerchant}>{I18n.t('login.title_footer')}</Text>
          <TouchableOpacity onPress={this.props.onPress} style={styles.buttonClick}>
            <Icon name={'arrow-right-bold'} style={styles.iconMerchant} />
            <Text style={styles.click}>{I18n.t('login.click')}</Text>
            <Text style={styles.here}>{I18n.t('login.here')}!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightMerchant}>
          <Text style={styles.hi}>{I18n.t('login.seller')}</Text>
          <Image
            source={require('../../../../assets/images/pig.svg')}
            style={styles.imageSvg}
          />
        </View>
      </View>
    );
  }

  renderCreateAccount() {
    return (
      <View style={styles.footer}>
        <View style={styles.boxFooter}>
          <View>
            <Text style={styles.textChildTitle}>{I18n.t('login.title_account')}</Text>
          </View>
          <BottomCreateSignUp
            style={styles.buttonCreate}
            create={I18n.t('login.text_create_account')}
            name={I18n.t('login.text_name_account')}
            color={'#fff'}
            onPress={this.onPress}
          />
          <Text style={styles.textChildFirst}>{I18n.t('login.text1')}</Text>
          <View style={styles.textSecond}>
            <Text style={styles.text}> {I18n.t('login.text2')} </Text>
            <View style={styles.iconFooter}>
              <FontAwesome style={styles.icon} name={'angle-right'} />
            </View>
            <Text style={styles.text}>{I18n.t('login.text3')}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderLogin() {
    return (
      <View style={styles.formLogin}>
        {this.props.inputs.username}
        {this.props.inputs.password}
        <TextPassword styleText={styles.textPassword} title={I18n.t('login.forgot_your_password')} />
        <ButtonSignin
          style={styles.loginButton}
          title={I18n.t('login.title')}
          onPress={() => {}}
          size={16}
          onPress={this.onSignupPress}
        />
      </View>
    );
  }

  render() {
    return (
          <View style={styles.container}>
            <ScrollView>
              <Text style={styles.titleHeader}>{I18n.t('login.sign_in')}</Text>
              <View style={styles.loginNetwork}>
                <View style={styles.buttonNetwork}>
                  <ButtonLogin
                    style={styles.buttonLoginFacebook}
                    iconName={'facebook'} iconSize={20}
                    iconColor={'#fff'}
                    title={I18n.t('login.facebook')}
                    onPress={this.onPress}
                  />
                  <ButtonLogin
                    style={styles.buttonLoginGoogle}
                    iconName={'google-plus'} iconSize={20}
                    iconColor={'#fff'}
                    title={I18n.t('login.google')}
                  />
                </View>
              </View>
              <View style={styles.or}>
                <Text style={styles.textOr}>{I18n.t('login.or')}</Text>
              </View>
              {this.renderLogin()}
              {this.renderCreateAccount()}
              {this.renderMerchant()}
            </ScrollView>
          </View>
    );
  }
}

export default Login;
