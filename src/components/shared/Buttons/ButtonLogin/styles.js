import { StyleSheet } from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  savebutton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 15,
    marginRight: 20,
  },
  buttontext: {
    color: '#fff',
    fontSize: 24,
    fontFamily: Fonts.ubuntuRegular,
  },
});

export default styles;
