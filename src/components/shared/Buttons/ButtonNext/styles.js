import { StyleSheet } from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  buttonArrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconButton: {
    width: 17,
    height: 17,
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    overflow: 'hidden',
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  childText: {
    fontSize: 16,
    fontFamily: Fonts.ubuntuItalic,
    color: '#fff',
    marginLeft: 3
  },
  text: {
    flexDirection: 'row'
  },
  text1: {
    flexDirection: 'row',
    marginLeft: 3
  }
});

export default styles;
