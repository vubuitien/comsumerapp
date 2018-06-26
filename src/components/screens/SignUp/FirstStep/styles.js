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
    marginRight: 3,
  },
  selecter: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    marginTop: 20
  },
  leftSelecter: {
    marginRight: 5,
    alignItems: 'flex-end',
    width: window.width / 2 - 15,
  },
  titleSelecter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSelecter: {
    color: '#fff',
    fontSize: 18
  },
  textSelecter: {
    fontSize: 13,
    color: '#fff',
    fontFamily: Fonts.ubuntuBold
  },
  textSelecter1: {
    fontSize: 13,
    color: '#fff',
    fontFamily: Fonts.ubuntuBoldItalic
  },
  contentSelecter: {
    textAlign: 'right',
    color: '#5B1700',
    fontSize: 12,
    fontFamily: Fonts.ubuntuItalic
  },
  alignment: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  firstTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  textSelect: {
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 22,
    color: '#fff',
    top: 2
  },
  textCategory: {
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 14,
    color: '#fff',
    alignItems: 'flex-start'
  },
  secondTitle: {
    fontSize: 11,
    color: '#5B1700',
    fontFamily: Fonts.ubuntuItalic,
    textAlign: 'center'
  },
  addCategory: {
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texTitleCategory: {
    flexDirection: 'column',
  },
  textImprove: {
    fontSize: 25,
    fontFamily: Fonts.yellowtail,
    color: '#fff',
  },
  textExposeure: {
    fontSize: 25,
    fontFamily: Fonts.yellowtail,
    color: '#fff',
    textAlign: 'right'
  },
  buttonCategory: {
    marginLeft: 5,
    marginTop: 10,
  },
  buttonCreate: {
    width: 160,
    height: 35,
    backgroundColor: '#ff8b03',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lengthCategory: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconText: {
    color: '#0070F5',
    fontSize: 24,
  },
  textLength: {
    color: '#0070F5',
    fontSize: 18,
    marginLeft: 3,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  checkCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 16,
    marginLeft: 20,
    marginRight: 20,
    width: 340,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0070F5',
  },
  textSelectCategory: {
    fontSize: 16,
    color: '#0070F5',
    fontFamily: Fonts.ubuntuRegular,
    marginLeft: 23,
    marginBottom: 5
  },
  categoryContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBox: {
    width: 300,
    height: 400,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
  },
  topBox: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    width: '100%',
  },
  textChoose: {
    fontSize: 22,
    color: '#000',
    fontFamily: Fonts.ubuntuRegular,
  },
  textSecond: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.ubuntuRegular,
  },
  scrollCategory: {
    marginLeft: 10
  },
  footerBox: {
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  clickBox: {
    textAlign: 'right',
    marginRight: 15,
    color: '#488AFF',
    fontSize: 18,
    fontFamily: Fonts.ubuntuRegular,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonRemember: {
    backgroundColor: '#7C7C7C',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginRight: 10
  },
  buttonNext: {
    backgroundColor: '#ff8b03',
    borderRadius: 20,
    justifyContent: 'center',
    width: window.width / 3 + 10,
  },
  buttonSelect: {
    flexDirection: 'row'
  },
  notificationContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBox: {
    width: window.width - 60,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  alignmentNotification: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  textTitle: {
    fontSize: 23,
    color: '#E45E24',
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  backButtonNotification: {
    height: 35,
    alignItems: 'center'
  },
  buttonNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-between'
  },
  styleCheckboxDo: {
    marginTop: 5
  },
  textBold: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: Fonts.ubuntuBold,
    color: '#2F364B'
  },
  textContent: {
    fontSize: 11,
    color: '#2F364B',
    marginTop: 10,
    fontFamily: Fonts.ubuntuRegular,
  },
});
