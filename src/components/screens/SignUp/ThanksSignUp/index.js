import {
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native'
import React, { Component } from 'react';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    ButtonNext,
    CheckBoxItems,
    ButtonBack
}
    from '../../../shared'
import I18n from '../../../../I18n'
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
            save: false
        };
    }
    componentWillMount() {
        this.setState({ save: true });
    }
    onNext() {
        this.props.navigation.navigate('GetMore');
    }
    showModalAgain = async(value)=>{
        if (!value) {
          await console.log("ag")
          AsyncStorage.setItem("noAgain","again")
        } else{
          await console.log("no ag")
          AsyncStorage.removeItem("noAgain")
        }
      }
    _renderModal() {
        return (
            <Spinner
                visible={this.state.save}
                overlayColor='rgba(0, 0, 0, 0.80)'
            >
                <View style={styles.notificationSpecial}>
                    <View style={styles.notificationSpecialBox}>
                        <View style={styles.alignmentSpecial}>
                            <Text style={styles.titleSpecial}>{I18n.t('signup.create_account.button.remember')}! </Text>

                            <View style={styles.boxSpecial}>
                                <Text style={styles.boxSpecial1}>
                                    <Text style={styles.titleSpecial1}>
                                        {I18n.t('signup.create_account.thanks.reservation_dealcoins')}
                                    </Text>
                                    <Text style={styles.titleSpecial2}>
                                        are good to reserve offers and equal amount when you close a deal. Use earned DealCoins to pay for any pur chase anywhere DealCoins are accepted.
                                    </Text>
                                </Text>
                                <Text style={styles.titleSpecial3}>
                                    See the menu My Preferences for currency, distance, date, time and other settings.
                                </Text>
                            </View>
                            <View style={styles.viewShare}>

                                <Text style={styles.textShare1}>
                                    {I18n.t('signup.create_account.thanks.share_coin')}
                                </Text>
                                <Text style={styles.textShare2}>+</Text>
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
                                    title={I18n.t('signup.create_account.thanks.dont')}
                                    style={styles.styleCheckboxDo}
                                    background={'#005ED6'}
                                    color={'#005ED6'}
                                    onPress={this.showModalAgain}
                                />
                                <ButtonBack
                                    style={styles.backButtonNotification}
                                    onPress={() => this.setState({ save: false })}
                                    iconName={'arrow-right-thick'}
                                    iconSize={15}
                                    title={I18n.t('signup.create_account.thanks.got')}
                                    childText={I18n.t('signup.create_account.thanks.it')}
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
                <View style={styles.wrapTextThanks}>
                    <Text style={styles.styleThanks1}>Thanks </Text>
                    <View style={styles.wrapSignup}>
                        <Text style={styles.styleThanks2}>For</Text>
                        <Text style={styles.styleThank3}>SIGNING UP </Text>
                    </View>
                </View>
            </View>
        );
    }
    _renderCon() {
        return (
            <View style={styles.styleCon}>
                <View style={styles.wrapstyleCon}>
                    <Text style={styles.styleCon1}>and </Text>
                    <Text style={styles.styleCon2}>Congratulations!  </Text>
                </View>
            </View>
        )
    }
    _renderCoins() {
        return (
            <View style={styles.styleCoins}>
                <View style={styles.styleTextCoin1}>
                    <Text style={styles.styleText1}>YOU </Text>
                    <Text style={styles.styleText2}>Won</Text>
                </View>
                <View style={styles.styleTextCoin2}>
                    <Image
                        source={require('../../../../../assets/images/monedas.svg')}
                        style={styles.imageSvg}
                    />
                    <View style={styles.styleTextCoin3}>
                        <Text style={styles.styleText3}>2500 </Text>
                        <Text style={styles.styleText4}>Reservation</Text>
                        <Text style={styles.styleText5}>DealCoins! </Text>
                    </View>
                </View>
                <View style={styles.styleTextCoin4}>
                    <Text style={styles.styleText6}>GOOD TO RESERVE OFFERS AND </Text>
                    <Text style={styles.styleText7}>EARN EQUAL AMOUNT TO SPEND </Text>
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
                            <Text style={styles.styleText8}>Win +</Text>
                            <Text style={styles.styleText9}> 100 DealCoins! </Text>
                        </View>
                        <View style={styles.styleWrapInsert}>
                            <View style={styles.styleInsert}>
                                <TextInput
                                    placeholder={'Insert Code'}
                                    underlineColorAndroid='transparent'
                                    style={styles.styleTextInput} />

                            </View>
                            <View style={styles.buttonInsert}>
                                <Icon
                                    name='arrow-right-thick'
                                    style={styles.iconNext} />
                            </View>
                        </View>
                        <Text style={styles.styleText10}>
                            Enter referral code to win extra DealCoins
                                </Text>
                    </View>
                </View>
            </View>
        )
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
                        <Text style={styles.styleText11}> Are you Ready?</Text>
                    </View>
                </View>
                <ButtonNext
                    onPress={this.onNext}
                    style={styles.buttonStart}
                    iconName={'chevron-right'}
                    iconSize={20}
                    iconColor={'#ff8700'}
                    title={'Start'}
                    childText={'Earning! '}
                />
            </View>
        );
    }
    render() {
        return (
            <LinearGradient
                colors={['#8f0000', '#ff4a00', '#8f0000']}
                style={styles.container}>
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