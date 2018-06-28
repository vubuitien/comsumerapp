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
    boxSignUp: {
      alignItems: 'center',
      paddingBottom: 60
    },
    buttonNext: {
      backgroundColor: '#ff8b03',
      borderRadius: 20,
      justifyContent: 'center',
      width: window.width / 3 + 50,
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
      marginLeft: window.width / 2 - 10,
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
      marginLeft: window.width / 2 + 20,
      color: '#FCB621',
      fontFamily: Fonts.ubuntuBoldItalic,
      fontSize: 18,
      lineHeight: 16
    },
    titleBox: {
      fontFamily: Fonts.yellowtail,
      color: '#fff',
      fontSize: 38,
      marginBottom: 20
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
      right: 30,
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
