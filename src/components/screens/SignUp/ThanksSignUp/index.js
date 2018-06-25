import {
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native'
import React, { Component } from 'react';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonNext } from '../../../shared'
export default class ThanksSignUp extends Component {
    constructor(props) {
        super(props);
        this._renderThanks = this._renderThanks.bind(this);
        this._renderCon = this._renderCon.bind(this);
        this._renderCoins = this._renderCoins.bind(this);
        this._renderInsertCoin = this._renderInsertCoin.bind(this);
        this._renderPig = this._renderPig.bind(this);
        this.onNext=this.onNext.bind(this);
    }
    onNext(){
        this.props.navigation.navigate('GetMore');
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
                    childText={'Earning!'}
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