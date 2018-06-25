import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  BoxArrow,
  ButtonNext
} from '../../../shared';
import { styles } from './styles';
import I18n from '../../../../I18n';

class GetMore extends Component {
  static navigationOptions = { title: 'GetMore', header: null };

  constructor(props) {
    super(props);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderGetCoins = this._renderGetCoins.bind(this);
    this._renderShare = this._renderShare.bind(this);
    this.onNextStep = this.onNextStep.bind(this);
  }

  onNextStep() {
    this.props.navigation.navigate('Welcome');
  }

  _renderShare() {
    return (
      <View style={styles.share}>
        <View style={styles.left}>
          <View style={styles.leftShare}>
            <Image
              source={require('../../../../../assets/images/icono_local_dealM.svg')}
              style={styles.imageSvg}
            />
            <Text style={styles.pushLeft}>{I18n.t('signup.create_account.get_more.push')}</Text>
            <Text style={styles.meLeft}>{I18n.t('signup.create_account.get_more.me')}</Text>
          </View>
          <View style={styles.iconLeft}>
            <Icon name={'arrow-right-bold'} style={styles.iconFirst} />
            <Icon name={'arrow-right-bold'} style={styles.iconSecond} />
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.rightShare}>
            <View style={styles.boxShare}>
              <Icon name={'share-variant'} style={styles.iconShare} />
            </View>
            <Text style={styles.titleShare}>{I18n.t('signup.create_account.get_more.share')}</Text>
          </View>
          <Text style={styles.contentShare}>{I18n.t('signup.create_account.get_more.content_share')}</Text>
        </View>
      </View>
    );
  }

  _renderGetCoins() {
    return (
      <View>
        <View style={styles.getCoins}>
          <Text style={styles.textGet}>{I18n.t('signup.create_account.get_more.get')}</Text>
          <Image
            source={require('../../../../../assets/images/monedas.svg')}
            style={styles.imageCoins}
          />
          <View>
            <Text style={styles.number}>{I18n.t('signup.create_account.get_more.number')}</Text>
            <Text style={styles.dealCoins}>{I18n.t('signup.create_account.get_more.dealcoins')}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textFirst}>{I18n.t('signup.create_account.get_more.title_get_first_coind')}</Text>
          <Text style={styles.textSecond}>{I18n.t('signup.create_account.get_more.title_get_second_coind')}</Text>
        </View>
      </View>
    );
  }

  _renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.titleHeader}>{I18n.t('signup.create_account.get_more.header_title')}</Text>
        <View style={styles.contentHeader}>
          <Text style={styles.boldFirstText}>{I18n.t('signup.create_account.get_more.title_header_1')}</Text>
        </View>
        <Text style={styles.boldSecondText}>{I18n.t('signup.create_account.get_more.title_header_2')}</Text>
      </View>
    );
  }

  render() {
    return (
      <LinearGradient
        colors={['#8f0000', '#ff4a00', '#8f0000']}
        style={styles.container}
      >
        <ScrollView>
          {this._renderHeader()}
          {this._renderShare()}
          {this._renderGetCoins()}
          <View style={styles.footer}>
            <View style={styles.leftFooter}>
              <View style={styles.boxTop}>
                <Text style={styles.textOr}>{I18n.t('signup.create_account.get_more.or')}</Text>
                <BoxArrow
                  iconName={'chevron-right'}
                  size={16}
                  color={'#D94000'}
                  style={styles.boxArrow}
                />
              </View>
              <Text style={styles.textFooter}>{I18n.t('signup.create_account.get_more.title_or')}</Text>
            </View>
            <ButtonNext
              iconName={'chevron-right'}
              iconSize={16}
              iconColor={'#ff8b03'}
              title={I18n.t('signup.create_account.get_more.start')}
              childText={I18n.t('signup.create_account.get_more.now')}
              style={styles.buttonNext}
              onPress={this.onNextStep}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
export default GetMore;
