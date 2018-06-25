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
    marginTop: 50,
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
    marginLeft: window.width / 2 - 50,
  },
  boldFirstText: {
    color: '#FCB621',
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 18,
    lineHeight: 14
  },
  boldSecondText: {
    marginLeft: window.width / 2 - 25,
    color: '#FCB621',
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 18,
    lineHeight: 16
  },
  share: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftShare: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 15,
  },
  imageSvg: {
    width: 40,
    height: 30
  },
  pushLeft: {
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  meLeft: {
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconLeft: {
    justifyContent: 'space-between',
    width: 23
  },
  iconFirst: {
    fontSize: 20,
    color: '#fff',
    transform: [{ rotate: '45deg' }]
  },
  iconSecond: {
    fontSize: 28,
    color: '#fff',
    transform: [{ rotate: '-45deg' }]
  },
  rightShare: {
    flexDirection: 'row',
    right: 10,
    alignItems: 'center',
    marginTop: 10
  },
  boxShare: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#ff8b02',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconShare: {
    fontSize: 35,
    color: '#fff'
  },
  titleShare: {
    fontSize: 40,
    color: '#fff',
    fontFamily: Fonts.yellowtail
  },
  contentShare: {
    marginLeft: 30,
    color: '#fff',
    fontFamily: Fonts.ubuntuLight,
    fontSize: 17
  },
  getCoins: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  imageCoins: {
    width: 90,
    height: 90,
  },
  number: {
    fontSize: 40,
    color: '#FFE000',
    fontFamily: Fonts.ubuntuBoldItalic,
    lineHeight: 40
  },
  dealCoins: {
    fontSize: 20,
    color: '#FFE000',
    fontFamily: Fonts.ubuntuBoldItalic,
    lineHeight: 20
  },
  textGet: {
    fontSize: 36,
    color: '#fff',
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  textFirst: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.ubuntuBold
  },
  textSecond: {
    marginLeft: window.width / 2 - 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.ubuntuBold
  },
  boxArrow: {
    width: 18,
    height: 18,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#FFB228',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50
  },
  boxTop: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  textOr: {
    fontSize: 26,
    marginRight: 5,
    fontFamily: Fonts.ubuntuBoldItalic,
    color: '#fff',
    lineHeight: 26
  },
  leftFooter: {
    alignItems: 'flex-end',
  },
  textFooter: {
    fontSize: 14,
    fontFamily: Fonts.ubuntuLightItalic,
    color: '#fff'
  },
  buttonNext: {
    backgroundColor: '#ff8b03',
    borderRadius: 20,
    justifyContent: 'center',
    width: window.width / 3 + 10,
    marginLeft: 15
  },
});
