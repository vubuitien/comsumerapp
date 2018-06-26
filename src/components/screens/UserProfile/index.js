import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image1 from 'react-native-remote-svg';
import { styles } from './styles';
import {
    HeaderBar,
    ButtonNext,
    TextDetails
} from '../../shared';
import I18n from '../../../I18n';
import Row from './Row';

class UserProfile extends Component {
    static navigationOptions = { title: 'UserProfile', header: null };

    constructor(props) {
        super(props);
        this.onSideBarPress = this.onSideBarPress.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._renderCoin = this._renderCoin.bind(this);
        this.state = {

            Default_Rating: 3,
            Max_Rating: 5

        };
        this.Star = 'star';

        this.Star_With_Border = 'star-outline';
    }

    onEditProfile() {
        this.props.navigation.navigate('EditUserProfile');
    }

    onSideBarPress() {
        console.log('on sidebar pressed');
        this.props.navigation.navigate('DrawerOpen');
    }

    _renderCoin() {
        const React_Native_Rating_Bar = [];
        for (let i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <Icon
                    style={styles.StarImage}
                    name={(i <= this.state.Default_Rating) ? this.Star : this.Star_With_Border}
                />

            );
        }
        return (
            <View style={styles.containerCoin}>
                <View style={styles.wrapper}>
                    <View style={styles.containerCoin1}>
                        <Image1
                            source={require('../../../../assets/images/monedas.svg')}
                            style={styles.imagesvg1}
                        />
                        <View style={styles.sumCoin}>
                            <Text style={styles.sum1}>48.328 </Text>
                            <Text style={styles.sum2}>BALANCE </Text>
                        </View>
                    </View>
                    <View style={styles.containerStar}>
                        <View style={styles.MainContainer}>

                            <View style={styles.childView}>

                                {
                                    React_Native_Rating_Bar
                                }

                            </View>

                            <Text style={styles.textStyle}>

                                <Text style={styles.textStyle1}>BASED ON </Text>
                                <Text style={styles.textStyle2}>27 REVIEWS </Text>

                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _renderHeader() {
        return (
            <View style={styles.header}>
                <Image
                    source={{ uri: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/cute-girls-profile-pics-1024x724.jpg' }}
                    style={styles.avata}
                />
                <Text style={styles.name}>EDDY KIEVS</Text>
                <Text style={styles.username}>@eddyks</Text>
                <ButtonNext
                    style={styles.edtiButton}
                    onPress={this.onEditProfile.bind(this)}
                    iconName={'chevron-right'}
                    iconSize={15}
                    iconColor={'#FF8700'}
                    title={'Edit'}
                    childText={'Profile'}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    name={'menu'}
                    title={'USER PROFILE'}
                    onPress={this.onSideBarPress}
                    style={styles.headerBar}
                    notify={'bell'}
                />
                {this._renderHeader()}
                {this._renderCoin()}
                <View style={styles.infomation}>
                    <Text style={styles.position}>{I18n.t('userProfile.myAccount')}</Text>
                    <Row
                        iconName={'email'}
                        title={'Eddy.kievs@closdeal.com'}
                    />
                    <View style={styles.password}>
                        <Text style={styles.textPassword}>Password ******</Text>
                        <TextDetails
                            color={'#ABACB1'}
                            iconName={'chevron-right'}
                            title={'change '}
                            titleBold={'Password'}
                            size={14}
                            hasSecondText
                        />
                    </View>
                    <Text style={styles.textDate}>
                        <Text style={styles.textDate1}>
                            {I18n.t('userProfile.dateOfBirth')}
                        </Text>
                        <Text style={styles.textDate2}>
                            05-04-1980
                        </Text>
                    </Text>
                    <Row
                        iconName={'map-marker'}
                        title={'Hollywod, South Florida. USA'}
                    />
                    <Row
                        iconName={'phone'}
                        title={'00-1-212-324-4152'}
                    />
                </View>
            </View>
        );
    }
}
export default UserProfile;
