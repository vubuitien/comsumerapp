import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Fonts from '../../../../constants/fonts';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED5001',
  },
  header: {
    marginTop: 30,
    marginBottom: 60
  },
  titleHeader: {
    fontFamily: Fonts.lobsterRegular,
    fontSize: 48,
    color: '#fff',
    textAlign: 'center'
  },
  contentHeader: {
    flexDirection: 'row',
    marginLeft: window.width / 2 - 15,
    marginTop: 5
  },
  normalText: {
    color: '#fff',
    fontFamily: Fonts.ubuntuLight,
    fontSize: 14,
    marginRight: 3
  },
  boldFirstText: {
    color: '#FCB621',
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 18,
    lineHeight: 14
  },
  boldSecondText: {
    marginLeft: window.width / 2 + 8,
    color: '#FCB621',
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 18,
    lineHeight: 16
  },
  titleBox: {
    textAlign: 'center',
    fontFamily: Fonts.yellowtail,
    color: '#fff',
    fontSize: 42,
  },
  textContentBox: {
    color: '#5B1700',
    fontSize: 16,
    fontFamily: Fonts.ubuntuBoldItalic
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  icon: {
    color: '#5B1700',
    fontSize: 30,
    marginRight: 3
  }
});
