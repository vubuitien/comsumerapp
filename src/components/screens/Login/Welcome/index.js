import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import {
    ButtonNext
} from '../../../shared';

export default class Welcome extends Component {
    static navigationOptions = { title: 'Login', header: null };
    constructor(props) {
        super(props);
        this._renderButton = this._renderButton.bind(this);
        this._renderCheck = this._renderCheck.bind(this);
        this._renderContaint = this._renderContaint.bind(this);
        this.onContinue = this.onContinue.bind(this);
    }

    onContinue() {
        this.props.navigation.navigate('UserProfile');
    }

    _renderButton() {
        return (
            <ButtonNext
            onPress={this.onContinue}
                style={styles.styleButtonNext}
                iconName={'chevron-right'}
                iconSize={18}
                iconColor={'#FF8700'}
                title={'Continue '}
            />
        );
    }
    _renderCheck() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.logo}>
                    <Icon name={'account'}  style={styles.icon1} />

                    <View style={styles.logo1}>
                        <Icon name={'check'}  style={styles.icon2} />
                    </View>

                </View>
                <View style={styles.wrapText}>
                    <Text style={styles.text1}>Welcome </Text>
                    <Text style={styles.text2}>Eddy! </Text>
                </View>
            </View>
        );
    }
    _renderContaint() {
        return (
            <View style={styles.wrapper2}>

                <View style={styles.containt1}>
                    <Text style={styles.text3}>Registered with </Text>

                    <View style={styles.email}>
                        <Icon name={'email'}  style={styles.ionemail} />
                        <Text style={styles.text4}>Eddy.kievs@closdeal.com</Text>
                    </View>

                </View>

                <View style={styles.containt2}>
                    <Text style={styles.text5}>Reputation with stars</Text>
                    <View style={styles.yellowstar}>
                        <Icon name={'star'} size={35} style={styles.yellowstar1} />
                        <Icon name={'star'} size={35} style={styles.yellowstar1} />
                        <Icon name={'star'} size={35} style={styles.yellowstar1} />
                        <Icon name={'star'} size={35} style={styles.yellowstar1} />
                        <Icon name={'star'} size={35} style={styles.yellowstar1} />
                    </View>
                    <View style={styles.wraptext6}>
                        <Text style={styles.text6}>
                            "We belive in you, so when you sign up we give you 5 star repulation"
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.upcontaint}>
                        {this._renderCheck()}
                    </View>
                    <View style={styles.containt}>
                        {this._renderContaint()}
                    </View>
                    <View style={styles.footerWelcome}>
                        {this._renderButton()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
