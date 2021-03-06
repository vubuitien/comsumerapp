import { StyleSheet } from 'react-native';
import Fonts from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  savebutton: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  creat: {
    fontSize: 15,
    fontFamily: Fonts.ubuntuItalic,
  },
  creatTitle: {
    fontSize: 15,
    fontFamily: Fonts.ubuntuItalic,
    marginLeft: 3
  }
});

export default styles;
