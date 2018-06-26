import { StyleSheet } from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  buttonArrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  iconButton: {
    width: 19,
    height: 19,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    overflow: 'hidden'
  },
  icon: {
    color: '#fff',
  },
  buttontext: {
    fontSize: 16,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  childText: {
    fontSize: 15,
    marginLeft: 3,
    fontFamily: Fonts.ubuntuLightItalic,
    marginTop: 1
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
