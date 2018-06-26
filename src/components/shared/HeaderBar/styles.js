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
    paddingRight: 20,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    color: '#fff',
  },
  headerNotify: {
    color: '#fff',
    fontSize: 24,
    paddingTop: 20,
    paddingRight: 15,
  }
});
