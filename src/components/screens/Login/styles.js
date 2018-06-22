import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Fonts from '../../../constants/fonts';
const window = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#741100',
    },
    loginNetwork: {
      flexDirection: 'column',
      borderBottomColor: '#CDCDCD',
      borderBottomWidth: 1,
      paddingBottom: 25,
      marginLeft: 20,
      marginRight: 20
    },
    textInput: {
      width: 320,
      fontSize: 14,
      fontFamily: Fonts.ubuntuLightItalic,
    },
    textChildLogin: {
      textAlign: 'center',
      color: '#1D6ED7',
      fontSize: 15,
      fontStyle: 'italic',
    },
    buttonNetwork: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonLoginFacebook: {
      backgroundColor: '#3B5999',
      width: '48%',
      height: 40,
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonLoginGoogle: {
      backgroundColor: '#CD181F',
      width: '48%',
      height: 40,
      justifyContent: 'center',
      borderRadius: 3,
    },
    loginButton: {
      width: window.width / 2,
      height: 40,
      backgroundColor: '#ff8b03',
      marginTop: 10,
      flexDirection: 'row',
      borderRadius: 20,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    or: {
      left: '45%',
      bottom: 15,
      alignItems: 'center',
      width: 40,
      height: 30,
      backgroundColor: '#741100',
    },
    textOr: {
      color: '#fff',
      position: 'absolute',
      fontSize: 16,
    },
    formLogin: {
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
    },
    textPassword: {
      fontSize: 14,
      color: '#fff',
      fontFamily: Fonts.ubuntuItalic,
      marginTop: 5,
    },
    titleHeader: {
      textAlign: 'center',
      fontSize: 36,
      color: '#fff',
      fontFamily: Fonts.lobsterRegular,
      marginTop: 30,
      marginBottom: 30
    },
    footer: {
      backgroundColor: '#000',
      alignItems: 'center',
      marginTop: 30,
    },
    boxFooter: {
      paddingTop: 20,
      paddingBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonCreate: {
      paddingLeft: 25,
      paddingRight: 25,
      height: 30,
      backgroundColor: '#ff8b03',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textChildTitle: {
      textAlign: 'center',
      fontFamily: Fonts.yellowtail,
      fontSize: 32,
      color: '#fff',
    },
    textChildFirst: {
      color: '#ADADAD',
      fontSize: 13,
      marginTop: 5,
      fontFamily: Fonts.ubuntuItalic,
    },
    textSecond: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5,
    },
    text: {
      color: '#E6B53B',
      fontSize: 14,
      fontFamily: Fonts.ubuntuItalic,
    },
    iconFooter: {
      width: 17,
      height: 17,
      borderRadius: 50,
      backgroundColor: '#E6B53B',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 3,
    },
    icon: {
      color: '#000',
      fontSize: 18,
    },
    merchant: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#0063D8'
    },
    imageSvg: {
      height: 120,
      right: 30
    },
    hi: {
      color: '#fff',
      fontFamily: Fonts.yellowtail,
      fontSize: 30,
      position: 'absolute',
    },
    buttonClick: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    leftMerchant: {
      width: window.width / 2 + 50,
    },
    textMerchant: {
      fontSize: 24,
      color: '#fff',
      fontFamily: Fonts.yellowtail,
    },
    iconMerchant: {
      fontSize: 20,
      color: '#fff'
    },
    click: {
      fontSize: 16,
      color: '#fff',
      fontFamily: Fonts.ubuntuBold
    },
    here: {
      fontSize: 16,
      color: '#fff',
      fontFamily: Fonts.ubuntuRegular,
      marginLeft: 3
    }
});
