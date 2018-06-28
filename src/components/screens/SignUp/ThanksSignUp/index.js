import {
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import {
    ButtonNext,
    CheckBoxItems,
    ButtonBack
}
from '../../../shared';
import I18n from '../../../../I18n';

export default class ThanksSignUp extends Component {
    constructor(props) {
        super(props);
        this._renderThanks = this._renderThanks.bind(this);
        this._renderCon = this._renderCon.bind(this);
        this._renderCoins = this._renderCoins.bind(this);
        this._renderInsertCoin = this._renderInsertCoin.bind(this);
        this._renderPig = this._renderPig.bind(this);
        this._renderModal = this._renderModal.bind(this);
        this.onNext = this.onNext.bind(this);
        this.state = {
            modal: false
        };
    }
    componentWillMount() {
        this.setState({ modal: true });
    }
    onNext() {
        this.props.navigation.navigate('GetMore');
    }
    showModalAgain = async (value) => {
        if (!value) {
          await console.log('ag');
          AsyncStorage.setItem('noAgain', 'again')
        } else {
          await console.log('no ag');
          AsyncStorage.removeItem('noAgain');
        }
      }
    _renderModal() {
        return (
            <Spinner
                visible={this.state.modal}
                overlayColor='rgba(0, 0, 0, 0.80)'
            >
                <View style={styles.notificationSpecial}>
                    <View style={styles.notificationSpecialBox}>
                        <View style={styles.alignmentSpecial}>
                            <Text style={styles.titleSpecial}>{I18n.t('signup.create_account.button.remember')}</Text>

                            <View style={styles.boxSpecial}>
                                <Text style={styles.boxSpecial1}>
                                    <Text style={styles.titleSpecial1}>
                                        {I18n.t('signup.create_account.thanks.reservation_dealcoins')}
                                    </Text>
                                    <Text style={styles.titleSpecial2}>
                                        {I18n.t('signup.create_account.thanks.content')}
                                    </Text>
                                </Text>
                                <Text style={styles.titleSpecial3}>
                                  {I18n.t('signup.create_account.thanks.content_2')}
                                </Text>
                            </View>
                            <View style={styles.viewShare}>

                                <Text style={styles.textShare1}>
                                    {I18n.t('signup.create_account.thanks.share_coin')}
                                </Text>
                                <Text style={styles.textShare2}>{I18n.t('signup.create_account.thanks.plus')}</Text>
                                <Image
                                    source={require('../../../../../assets/images/monedas.svg')}
                                    style={styles.imageSvg3}
                                />
                                <Text style={styles.textShare3}>
                                    {I18n.t('signup.create_account.thanks.more_coin')}
                                </Text>
                            </View>
                            <View style={styles.buttonNotification}>
                              <CheckBoxItems
                                title={I18n.t('dont_show_again')}
                                style={styles.styleCheckboxDo}
                                background={'#005ED6'}
                                onPress={() => {}}
                                color={'#005ED6'}
                              />
                              <ButtonBack
                                style={styles.backButtonNotification}
                                onPress={() => { this.setState({ modal: false }); }}
                                iconName={'arrow-right-thick'}
                                iconSize={15}
                                title={I18n.t('got')}
                                childText={I18n.t('it')}
                                color={'#E45E24'}
                              />
                            </View>
                        </View>
                    </View>
                </View>
            </Spinner>
        );
    }
    _renderThanks() {
        return (
            <View style={styles.styleThanks}>
                <Text style={styles.styleThanks1}>{I18n.t('signup.create_account.thanks.thank')}</Text>
                <View style={styles.wrapSignup}>
                    <Text style={styles.styleThanks2}>{I18n.t('signup.create_account.thanks.for')}</Text>
                    <Text style={styles.styleThank3}>{I18n.t('signup.create_account.thanks.signup')}</Text>
                </View>
            </View>
        );
    }
    _renderCon() {
        return (
            <View style={styles.styleCon}>
                <View style={styles.wrapstyleCon}>
                    <Text style={styles.styleCon1}>{I18n.t('signup.create_account.thanks.and')}</Text>
                    <Text style={styles.styleCon2}>{I18n.t('signup.create_account.thanks.congratulations')}</Text>
                </View>
            </View>
        )
    }
    _renderCoins() {
        return (
            <View style={styles.styleCoins}>
                <View style={styles.styleTextCoin1}>
                    <Text style={styles.styleText1}>{I18n.t('signup.create_account.thanks.you')}</Text>
                    <Text style={styles.styleText2}>{I18n.t('signup.create_account.thanks.won')}</Text>
                </View>
                <View style={styles.styleTextCoin2}>
                    <Image
                        source={require('../../../../../assets/images/monedas.svg')}
                        style={styles.imageSvg}
                    />
                    <View style={styles.styleTextCoin3}>
                        <Text style={styles.styleText3}>{I18n.t('signup.create_account.thanks.number')}</Text>
                        <Text style={styles.styleText4}>{I18n.t('signup.create_account.thanks.reservation')}</Text>
                        <Text style={styles.styleText5}>{I18n.t('signup.create_account.thanks.dealcoins')}</Text>
                    </View>
                </View>
                <View style={styles.styleTextCoin4}>
                    <Text style={styles.styleText6}>{I18n.t('signup.create_account.thanks.good_to')}</Text>
                    <Text style={styles.styleText7}>{I18n.t('signup.create_account.thanks.earn_equal')}</Text>
                </View>
            </View>
        )
    }
    _renderInsertCoin() {
        return (
            <View style={styles.styleTextCoin5}>
                <View style={styles.styleTextCoin6}>
                    <Image
                        source={require('../../../../../assets/images/insert_coin.svg')}
                        style={styles.imageSvg1}
                    />
                    <View style={styles.styleTextCoin7}>

                        <View style={styles.styleTextCoin8}>
                            <Text style={styles.styleText8}>{I18n.t('signup.create_account.thanks.win')}</Text>
                            <Text style={styles.styleText9}>{I18n.t('signup.create_account.thanks.number_dealcoins')}</Text>
                        </View>
                        <View style={styles.styleWrapInsert}>
                            <View style={styles.styleInsert}>
                                <TextInput
                                    placeholder={I18n.t('signup.create_account.thanks.placeholder')}
                                    underlineColorAndroid='transparent'
                                    style={styles.styleTextInput}
                                />
                            </View>
                            <View style={styles.buttonInsert}>
                                <Icon
                                    name='arrow-right-thick'
                                    style={styles.iconNext}
                                />
                            </View>
                        </View>
                        <Text style={styles.styleText10}>
                            {I18n.t('signup.create_account.thanks.text_placeholder')}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    _renderPig() {
        return (
            <View style={styles.footer}>
                <View style={styles.footer1}>
                    <Image
                        source={require('../../../../../assets/images/pig.svg')}
                        style={styles.imageSvg2}
                    />
                    <View style={styles.viewPigText}>
                        <Text style={styles.styleText11}>{I18n.t('signup.create_account.thanks.are_you_ready')}</Text>
                    </View>
                </View>
                <ButtonNext
                    onPress={this.onNext}
                    style={styles.buttonStart}
                    iconName={'chevron-right'}
                    iconSize={20}
                    iconColor={'#ff8700'}
                    title={I18n.t('signup.create_account.thanks.start')}
                    childText={I18n.t('signup.create_account.thanks.earn')}
                />
            </View>
        );
    }
    render() {
        return (
            <LinearGradient
                colors={['#8f0000', '#ff4a00', '#8f0000']}
                style={styles.container}
            >
                <ScrollView >
                    {this._renderModal()}
                    {this._renderThanks()}

                    {this._renderCon()}

                    {this._renderCoins()}

                    {this._renderInsertCoin()}

                    {this._renderPig()}
                </ScrollView>
            </LinearGradient>
        );
    }
}
