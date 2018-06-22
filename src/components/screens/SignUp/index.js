import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import {
  ButtonNext
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
    this._renderHeader = this._renderHeader.bind(this);
    this._renderMerchant = this._renderMerchant.bind(this);
    this.onNextStep = this.onNextStep.bind(this);
  }

  onNextStep() {
    this.props.navigation.navigate('FirstStep');
  }

  _renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.titleHeader}>{I18n.t('signup.title_header')}</Text>
        <View style={styles.contentHeader}>
          <Text style={styles.normalText}>{I18n.t('signup.norder_text_header')}</Text>
          <Text style={styles.boldFirstText}>{I18n.t('signup.bold_text_header')}</Text>
        </View>
        <Text style={styles.boldSecondText}>{I18n.t('signup.bold_text_header2')}</Text>
      </View>
    );
  }

  _renderMerchant() {
    return (
      <View style={styles.merchant}>
        <View style={styles.leftMerchant}>
          <Text style={styles.textMerchant}>{I18n.t('signup.title_footer')}</Text>
          <TouchableOpacity onPress={this.props.onPress} style={styles.buttonClick}>
            <Icon name={'arrow-right-bold'} style={styles.iconMerchant} />
            <Text style={styles.click}>{I18n.t('signup.click')}</Text>
            <Text style={styles.here}>{I18n.t('signup.here')}!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightMerchant}>
          <Text style={styles.hi}>{I18n.t('signup.seller')}</Text>
          <Image
            source={require('../../../../assets/images/pig.svg')}
            style={styles.imageSvg}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this._renderHeader()}
          <View style={styles.boxSignUp}>
            <Text style={styles.titleBox}>{I18n.t('signup.title_box_signup')}</Text>
            {this.props.inputs.username}
            {this.props.inputs.email}
            {this.props.inputs.password}
            {this.props.inputs.confirmpassword}
            <ButtonNext
              iconName={'chevron-right'}
              iconSize={16}
              iconColor={'#ff8b03'}
              title={I18n.t('signup.next')}
              childText={I18n.t('signup.step')}
              style={styles.buttonNext}
              onPress={this.onNextStep}
            />
          </View>
          {this._renderMerchant()}
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
