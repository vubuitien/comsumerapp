import {
  StyleSheet,
} from 'react-native';
import { Fonts } from '../../../constants';

export const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    flex: 1,
  },
  textTitle: {
    paddingTop: 22,
    fontSize: 17,
    color: '#fff',
    fontFamily: Fonts.ubuntuBold
  },
  headerClose: {
    flexDirection: 'row',
    paddingRight: '6%',
    paddingLeft: '5%',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    color: '#fff',
  },
  headerNotify: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.ubuntuLight,
    paddingTop: 20,
    paddingRight: '5%',
  }
});
