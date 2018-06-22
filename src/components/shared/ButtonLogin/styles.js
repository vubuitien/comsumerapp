import { StyleSheet } from 'react-native';
import Fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  savebutton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.ubuntuRegular,
  },
});

export default styles;
