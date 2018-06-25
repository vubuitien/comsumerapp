import {
    StyleSheet,
} from 'react-native';
import Fonts from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  boxBirthday: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputDay: {
    width: 35,
    height: 40,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: Fonts.ubuntuLight,
  },
  textInputYear: {
    width: 45,
    height: 40,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: Fonts.ubuntuLight,
  },
  textStyle: {
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.ubuntuBold,
    justifyContent: 'center'
  }
});

export default styles;
