import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Fonts from '../../../../../constants/fonts';
const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: window.width - 100,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  textInput: {
    maxWidth: 230,
    minWidth: 100,
    fontSize: 14,
    fontFamily: Fonts.ubuntuLightItalic,
  },
  icon: {
    fontSize: 20,
    color: '#b2b2b2'
  }
});
