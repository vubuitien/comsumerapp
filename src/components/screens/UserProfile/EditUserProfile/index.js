import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import {
    HeaderBar,
    TextInputData,
    TextDetails,
    ButtonNext
} from '../../../shared';
import Spinner from 'react-native-loading-spinner-overlay';
import Row from '../Row';

class EditUserProfile extends Component {
    static navigationOptions = { title: 'EditProfile', header: null };

    constructor(props) {
        super(props);
        this._renderUploadImage = this._renderUploadImage.bind(this);
        this._renderUser = this._renderUser.bind(this);
        this._renderProfileData = this._renderProfileData.bind(this);
        this._renderEmail = this._renderEmail.bind(this);
        this._renderNotification = this._renderNotification.bind(this);
        this.state = {
            detail: '',
            name: '',
            address: '',
            phone: '',
            wait: false
        };
    }
    _renderNotification() {
        return (
            <Spinner
                visible={this.state.wait}
                overlayColor='rgba(0, 0, 0, 0.0)'>
                <View style={styles.styleNoty}>
                    <View style={styles.styleNoty1}>
                        <Text style={styles.textNoti1}>Your Profile was succesfully saved</Text>
                        <Text style={styles.textNoti2} onPress={() => { this.setState({ wait: false }) }}> Ok </Text>
                    </View>
                </View>
            </Spinner>
        );
    }
    _renderEmail() {
        return (
            <View style={styles.email}>
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
            </View>
        );
    }

    _renderProfileData() {
        return (
            <View>
                <Text style={styles.role}>Profile Data:</Text>
                <View style={styles.boxRowMap}>
                    <Row
                        iconName={'map-marker'}
                        placeholder={'19495 Biscayne Blvd, Aventure, South Florida'}
                        onChange={(address) => { this.setState({ address }); }}
                        text={this.state.address}
                        textInput={styles.profileData}
                        color={'#b2b2b2'}
                        hasInput
                    />
                </View>
                <View style={styles.boxRowPhone}>
                    <Row
                        iconName={'phone'}
                        placeholder={'00-1-212-324-4152'}
                        onChange={(phone) => { this.setState({ phone }); }}
                        text={this.state.phone}
                        textInput={styles.profileData}
                        color={'#b2b2b2'}
                        hasInput
                    />
                </View>
            </View>
        );
    }

    _renderUser() {
        return (
            <View style={styles.user}>
                <View style={styles.infomation}>
                    <Text style={styles.position}>MY ACCOUNT  </Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.textInput}>Name</Text>
                    <TextInputData
                        style={styles.textInputName}
                        onChange={(name) => { this.setState({ name }); }}
                        text={this.state.name}
                        label={'EDDY KIEVS'}
                        placeholderColor={'#303849'}
                        underline={'transparent'}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.textInput}>Detail</Text>
                    <TextInputData
                        style={styles.textInputDetail}
                        onChange={(detail) => { this.setState({ detail }); }}
                        text={this.state.detail}
                        label={'@eddyks'}
                        placeholderColor={'#303849'}
                        underline={'transparent'}
                    />
                </View>
            </View>
        );
    }

    _renderUploadImage() {
        return (
            <View style={styles.editProfile}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.boxImage}>
                        <Icon name={'camera'} style={styles.icon} />
                        <Text style={styles.textImage}>Brand Image</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.addProfile}>
                    <Text style={styles.textAdd}>+ Add</Text>
                    <Text style={styles.textProfile}>Profile Image</Text>
                </View>
                <Text style={styles.textChild}>Recommended Image Size</Text>
                <Text style={styles.textChild}>500px by 500px</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this._renderNotification()}
                <HeaderBar
                    name={'arrow-left'}
                    title={'EDIT USER PROFILE'}
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.headerBar}
                />
                <ScrollView>
                    <View style={styles.middle}>
                        {this._renderUploadImage()}
                        {this._renderUser()}
                        {this._renderProfileData()}
                        {this._renderEmail()}
                    </View>
                    <View style={styles.footer}>
                        <ButtonNext
                            onPress={() => { this.setState({ wait: true }) }}
                            style={styles.nextButton}
                            iconName={'chevron-right'}
                            iconSize={15}
                            title={'SAVE'}
                            childText={'Profile'}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default EditUserProfile;