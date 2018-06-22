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
import { HeaderBar, BottomCreateSignUp, ButtonBack, ListViewWrapper } from '../../../shared';
import { styles } from './styles';
import CategoryItems from './Category/CategoryItems';
import { CategoryQuery } from './queries';
import Row from './Row';
import I18n from "../../../../I18n";

class FirstStep extends Component {
  constructor(props) {
    super(props);
    this._renderHeader = this._renderHeader.bind(this);
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
      <View style={styles.container}>
        <ScrollView>
          {this._renderHeader()}
          <View style={styles.boxSelect}>
            <Text style={styles.titleBox}>More Benefits?</Text>
            <View style={styles.boxContent}>
              <Icon name={'tag-multiple'} style={styles.icon} />
              <Text style={styles.textContentBox}>I'm interested in ...</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default FirstStep;
