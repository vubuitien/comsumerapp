import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../../../constants'
const window = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A0000'
    },
    styleThanks: {
        width: window.width,
        height: window.width / 3 - 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleThanks1: {
        fontFamily: Fonts.lobsterRegular,
        fontSize: 48,
        color: '#fff',
        width: '100%'
    },
    wrapTextThanks: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: window.width / 3 + 30,
        height: window.width / 4,
    },
    wrapSignup: {
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        marginBottom: 3,
    },
    styleThanks2: {
        fontFamily: Fonts.ubuntuRegular,
        color: '#fff',
        fontSize: 14,
        paddingTop: 4,
        paddingLeft: 5
    },
    styleThank3: {
        fontFamily: Fonts.ubuntuBoldItalic,
        color: '#FF8700',
        fontSize: 19,
        paddingLeft: 5
    },
    styleCon: {
        width: window.width,
        height: window.width / 4 - 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapstyleCon: {
        width: window.width,
        height: window.width / 4 - 10,
        alignItems: 'center',
    },
    styleCon1: {
        fontFamily: Fonts.yellowtail,
        fontSize: 35,
        marginRight: window.width / 9,
        color: '#fff',
    },
    styleCon2: {
        fontFamily: Fonts.yellowtail,
        fontSize: 45,
        color: '#fff',
        paddingLeft: window.width / 9 + 12,
        position: 'absolute',
        top: 20,
    },
    styleCoins: {
        width: window.width,
        height: window.width / 2 + 30,
        alignItems: 'center',
    },
    styleTextCoin1: {
        width: window.width / 2,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: window.width / 4 - 20,
    },
    styleText1: {
        fontSize: 25,
        fontFamily: Fonts.ubuntuBoldItalic,
        position: 'absolute',
        top: 28,
        left: window.width / 12 - 32,
        marginRight: 30,
        
    },
    styleText2: {
        fontSize: 47,
        fontFamily: Fonts.lobsterRegular,
        paddingLeft: 18
    },
    styleTextCoin2: {
        width: window.width / 2 + 60,
        height: window.width / 3 - 25,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: window.width / 5 - 30,
        position: 'absolute',
        top: window.width / 9 + 10,
        left: window.width / 9,
    },
    imageSvg: {
        width: window.width / 5 + 20,
        height: window.width / 5 + 20
    },
    styleTextCoin3: {
        flex: 1,
    },
    styleText3: {
        fontSize: 49,
        fontFamily: Fonts.ubuntuBoldItalic,
    },
    styleText4: {
        fontSize: 18,
        fontFamily: Fonts.ubuntuBoldItalic,
        position: 'absolute',
        top: window.width / 7 - 2
    },
    styleText5: {
        fontSize: 18,
        fontFamily: Fonts.ubuntuBoldItalic,
        marginLeft: 20,
        marginTop: 10
    },
    styleTextCoin4: {
        alignItems: 'center',
        width: window.width,
        height: window.width / 9,
        position: 'absolute',
        bottom: window.width / 9 - 25,
    },
    styleText6: {
        fontSize: 16,
        fontFamily: Fonts.ubuntuBoldItalic,
        color: '#fff'
    },
    styleText7: {
        fontSize: 16,
        fontFamily: Fonts.ubuntuBoldItalic,
        paddingLeft: window.width / 9 + 10,
        position: 'absolute',
        top: window.width / 9 - 25,
        color: '#fff',
    },
    styleTextCoin5: {
        width: window.width,
        height: window.width / 3,
        backgroundColor: '#282828',
        alignItems: 'center',

    },
    imageSvg1: {
        width: window.width / 5 + 25,
        height: window.width / 5 + 25,
        marginTop: 8
    },
    styleTextCoin6: {
        flex: 1,
        marginLeft: window.width / 9 - 20,
        marginRight: window.width / 9 - 20,
        flexDirection: 'row',
    },
    styleTextCoin7: {
        flex: 1,
    },
    styleTextCoin8: {
        width: window.width,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 15
    },
    styleText8: {
        fontSize: 22,
        fontFamily: Fonts.ubuntuBoldItalic,

    },
    styleText9: {
        fontSize: 16,
        fontFamily: Fonts.ubuntuBoldItalic,
    },
    styleWrapInsert: {
        flexDirection: 'row'
    },
    styleInsert: {
        width: window.width / 3 + 42,
        height: window.width / 9 + 2,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        overflow: "hidden",
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 2
    },
    styleTextInput: {
        width: window.width / 3 - 10,
        fontSize: 12,
        marginLeft: window.width / 10
    },
    buttonInsert: {
        backgroundColor: '#FF8700',
        width: window.width / 9 + 5,
        height: window.width / 9 + 5,
        overflow: "hidden",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    iconNext: {
        fontSize: 35,
        color: '#fff'
    },
    styleText10: {
        fontFamily: Fonts.ubuntuItalic,
        fontSize: 10,
        color: '#868686',
    },
    footer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: window.width,
        height: window.width / 3 + 10
    },
    imageSvg2: {
        width: window.width / 4 + 50,
        height: window.width / 4 + 50,
    },
    footer1: {
        marginLeft: window.width / 9
    },
    viewPigText: {
        width: window.width / 9 + 5,
        position: 'absolute',
        left: window.width / 9 + 30,
        top: 8
    },
    styleText11: {
        fontFamily: Fonts.yellowtail,
        fontSize: 12,
        color: '#fff',
    },
    buttonStart: {
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: '#ff8700',
        paddingLeft: 15,
        paddingRight: 15,
    }
})