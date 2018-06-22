import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Fonts from '../../../../constants/fonts';
const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#741100',
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    marginTop: 30,
  },
  titleHeader: {
    fontFamily: Fonts.lobsterRegular,
    textAlign: 'center',
    color: '#fff',
    fontSize: 40
  },
  contentHeader: {
    color: '#FEB31A',
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 16,
    marginLeft: window.width / 2 - 50,
  },
  secondContentHeader: {
    color: '#FEB31A',
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 16,
    marginLeft: window.width / 2 - 25,
  }
});
