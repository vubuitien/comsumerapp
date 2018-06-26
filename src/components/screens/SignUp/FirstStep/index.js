import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Image from 'react-native-remote-svg';
import { graphql } from 'react-apollo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { BottomCreateSignUp, ButtonSelect, ListViewWrapper, ButtonNext, ButtonBack, CheckBoxItems } from '../../../shared';
import { styles } from './styles';
import CategoryItems from './Category/CategoryItems';
import { CategoryQuery } from './queries';
import Row from './Row';
import I18n from '../../../../I18n';
import {
  tcombForm
} from '../../../higher_order';
import fields from '../fields';

var arrayData = [];
var mangId = [];
@tcombForm(fields)
class FirstStep extends Component {
  constructor(props) {
    super(props);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderSelect = this._renderSelect.bind(this);
    this._renderCategory = this._renderCategory.bind(this);
    this._renderBirthday = this._renderBirthday.bind(this);
    this._renderGender = this._renderGender.bind(this);
    this._renderModal = this._renderModal.bind(this);
    this._renderModalCategory = this._renderModalCategory.bind(this);
    this.onNext = this.onNext.bind(this);
    this.state = {
      loading: false,
      wait: false,
      dataCheck: [],
      male: true,
      female: true,
      male_female: true,
      modal: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps === this.props && nextState === this.state) {
      return false;
    }
    return true;
  }

  onNext() {
    this.props.navigation.navigate('ThanksSignUp');
  }

  onMale() {
    this.setState({
      male: false,
      female: true,
      male_female: true
    });
  }

  onFemale() {
    this.setState({
      male: true,
      female: false,
      male_female: true,
    });
  }

  onMaleFemale() {
    this.setState({
      male: true,
      female: true,
      male_female: false,
    });
  }

  _onNextStep = async () => {
    // TODO: transfer list of category ids to next screen
    if (this.state.dataCheck.length != 0) {
      await this.props.navigation.navigate('ThanksSignUp', {
        dataAllCategory: this.state.dataCheckId
      });
      arrayDataId = [];
      arrayData = [];
    } else {
      (
        this.setState({ wait: true })
      );
    }
  }

  _getDataId = async () => {
    mangId = await [];
    for (let i = 0; i < this.state.dataCheck.length; i++) {
      mangId.push(this.state.dataCheck[i].id);
    }
  }

  _addCheck = (obj) => {
    if (arrayData.indexOf(obj) < 0) {
      arrayData.push(obj);
    }
  }

  _delCheck = (obj) => {
    arrayData = arrayData.filter(word => word.name !== obj.name);
  }

  _delArray = () => {
    arrayData = [];
  }


  _setStateCheck = () => {
    this.setState({ dataCheck: arrayData });
  }

  _renderModal() {
    return (
      <Spinner
        visible={this.state.modal}
        overlayColor='rgba(0, 0, 0, 0.80)'
      >
        <View style={styles.notificationContainer}>
          <View style={styles.notificationBox}>
            <View style={styles.alignmentNotification}>
              <Text style={styles.textTitle}>
                {I18n.t('signup.create_account.modal.title')}
              </Text>
              <Text style={styles.textBold}>
                {I18n.t('signup.create_account.modal.text_bold')}
              </Text>
              <Text style={styles.textContent}>
                {I18n.t('signup.create_account.modal.text_content_1')}
              </Text>
              <Text style={styles.textContent}>
                {I18n.t('signup.create_account.modal.text_content_2')}
              </Text>
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

  _renderModalCategory = () => {
    return (
      <Spinner
        visible={this.state.loading}
        overlayColor='rgba(0, 0, 0, 0.30)'
      >
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBox}>
            <View style={styles.topBox}>
              <Text style={styles.textChoose}>{I18n.t('signup.create_account.modal.text1')}</Text>
              <Text style={styles.textSecond}>{I18n.t('signup.create_account.modal.text2')}</Text>
            </View>
            <CategoryQuery>
              {
                (queryResult, loading) =>
                  (<ScrollView style={styles.scrollCategory}>
                    <ListViewWrapper
                      navigation={this.props.navigation}
                      data={queryResult.getAllCategories}
                      row={(data) => <Row
                        {...data}
                      />}
                      addCheck={this._addCheck}
                      delCheck={this._delCheck}
                      dataCheck={this.state.dataCheck}
                    />
                  </ScrollView>)
              }
            </CategoryQuery>
            <View style={styles.footerBox}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ loading: false });
                  this._delArray();
                }}
              >
                <Text style={styles.clickBox}>{I18n.t('signup.create_account.modal.text3')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  this.setState({ loading: false });
                  this.setState({ dataCheck: arrayData });
                }}
              >
                <Text style={styles.clickBox}>{I18n.t('signup.create_account.modal.text4')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Spinner>
    );
  }

  _renderCategory() {
    return (
      <View style={styles.addCategory}>
        <View style={styles.texTitleCategory}>
          <Text style={styles.textImprove}> {I18n.t('signup.create_account.category.text1')} </Text>
          <Text style={styles.textExposeure}>{I18n.t('signup.create_account.category.text2')}</Text>
        </View>
        <View style={styles.buttonCategory}>
          <BottomCreateSignUp
            style={styles.buttonCreate}
            create={I18n.t('signup.create_account.category.create_btn')}
            name={I18n.t('signup.create_account.category.name_btn')}
            color={'#fff'}
            onPress={() => {
              this.setState({ loading: true });
            }}
          />
        </View>
      </View>
    );
  }

  _renderGender() {
    return (
      <View style={styles.selecter}>
        <View style={styles.leftSelecter}>
          <View style={styles.titleSelecter}>
            <Icon name={'gender-transgender'} style={styles.iconSelecter} />
            <Text style={styles.textSelecter1}>{I18n.t('signup.create_account.head.gender_title')}</Text>
          </View>
          <Text style={styles.contentSelecter}>{I18n.t('signup.create_account.head.gender_content')}</Text>
        </View>
        <View style={styles.buttonSelect}>
          <TouchableOpacity onPress={() => this.onMale()}>
            <ButtonSelect
              nameIcon={'human-female'}
              selected={this.state.male}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onFemale()}>
            <ButtonSelect
              nameIcon={'human-male'}
              selected={this.state.female}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onMaleFemale()}>
            <ButtonSelect
              nameIcon={'human-male-female'}
              selected={this.state.male_female}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderBirthday() {
    return (
      <View style={styles.selecter}>
        <View style={styles.leftSelecter}>
          <View style={styles.titleSelecter}>
            <Icon name={'cake'} style={styles.iconSelecter} />
            <Text style={styles.textSelecter}>{I18n.t('signup.create_account.head.birthday_title')}</Text>
          </View>
          <Text style={styles.contentSelecter}>{I18n.t('signup.create_account.head.birthday_content')}</Text>
        </View>
        <View>
          {this.props.inputs.birthday}
        </View>
      </View>
    );
  }

  _renderSelect() {
    return (
      <View style={styles.alignment}>
        <View style={styles.firstTitle}>
          <Text style={styles.textSelect}> {I18n.t('signup.create_account.head.text1')} </Text>
          <Text style={styles.textCategory}>{I18n.t('signup.create_account.head.text2')}</Text>
        </View>
        <Text style={styles.secondTitle}> {I18n.t('signup.create_account.head.text3')} </Text>
      </View>
    );
  }

  _renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.titleHeader}>{I18n.t('signup.create_account.title_header')}</Text>
        <View style={styles.contentHeader}>
          <Text style={styles.boldFirstText}>{I18n.t('signup.create_account.bold_text_header')}</Text>
        </View>
        <Text style={styles.boldSecondText}>{I18n.t('signup.create_account.bold_text_header2')}</Text>
      </View>
    );
  }

  render() {
    return (
      <LinearGradient
        colors={['#8f0000', '#ff4a00', '#8f0000']}
        style={styles.container}
      >
        {this._renderModal()}
        {this._renderModalCategory()}
        <ScrollView>
          {this._renderHeader()}
          <View style={styles.boxSelect}>
            <Text style={styles.titleBox}>{I18n.t('signup.create_account.head.title')}</Text>
            <View style={styles.boxContent}>
              <Icon name={'tag-multiple'} style={styles.icon} />
              <Text style={styles.textContentBox}>{I18n.t('signup.create_account.head.content')}</Text>
            </View>
            {this._renderBirthday()}
            {this._renderGender()}
          </View>
          {this._renderSelect()}
          {this._renderCategory()}
          <CategoryItems item={this.state.dataCheck} />
          <View style={styles.footer}>
            <BottomCreateSignUp
              style={styles.buttonRemember}
              title={I18n.t('signup.create_account.button.late')}
              name={I18n.t('signup.create_account.button.remember')}
              color={'#fff'}
              hasShowTitle
              onPress={this.onNextStep}
            />
            <ButtonNext
              iconName={'chevron-right'}
              iconSize={16}
              iconColor={'#ff8b03'}
              title={I18n.t('signup.create_account.button.continue')}
              style={styles.buttonNext}
              onPress={this.onNext}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
export default FirstStep;
