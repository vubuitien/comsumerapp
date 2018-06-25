import {
    StyleSheet, Dimensions
} from 'react-native';
import Fonts from '../../../../constants/fonts';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    upcontaint: {
        backgroundColor: '#F03500',
        width: window.width,
        height: window.width / 2 + 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: window.width / 3,
        height: window.width / 3,
        backgroundColor: '#fff',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo1: {
        width: window.width / 8,
        height: window.width / 8,
        backgroundColor: '#00BB00',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    icon1: {
        color: '#FF8700',
        fontSize: 100
    },
    icon2: {
        color: '#fff',
        fontSize: 40,
    },
    wrapText: {
        flexDirection: 'row',
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
    text1: {
        fontFamily: Fonts.yellowtail,
        fontSize: 35,
        color: '#fff'
    },
    text2: {
        fontFamily: Fonts.ubuntuItalic,
        fontSize: 25,
        color: '#fff'
    },
    containt: {
        width: window.width - 20,
        height: window.width / 2 + 115,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#b2b2b2',
        marginLeft: 10,
        marginRight: 10
    },
    wrapper2: {
        width: window.width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containt1: {
        width: window.width,
        height: window.width / 7 + 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    },
    text3: {
        color: '#f53f11',
        fontSize: 18,
        fontFamily: Fonts.ubuntuBoldItalic
    },
    email: {
        flexDirection: 'row',
    },
    text4: {
        fontSize: 14,
        color: '#52515e',
        paddingLeft: 5,
        fontFamily: Fonts.ubuntuItalic
    },
    ionemail: {
        marginLeft: window.width / 9 - 50,
        fontSize: 20
    },
    containt2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35
    },
    text5: {
        color: '#f53f11',
        fontSize: 18,
        fontFamily: Fonts.ubuntuBoldItalic
    },
    yellowstar: {
        flexDirection: 'row',
        paddingTop: 5
    },
    yellowstar1: {
        color: '#FF8700',
        fontSize: 35
    },
    wraptext6: {
        width: window.width,
        paddingLeft: window.width / 8,
        paddingRight: window.width / 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text6: {
        paddingTop: 10,
        fontSize: 12,
        fontFamily: Fonts.ubuntuItalic,
        color: '#52515e',
        textAlign: 'center'
    },
    text7: {
        fontSize: 12,
        fontFamily: Fonts.ubuntuItalic,
        color: '#52515e'
    },
    view1: {
        width: window.width - 20,
        height: 2,
        backgroundColor: '#ccc',
        marginTop: 30
    },
    footerWelcome: {
        width: window.width,
        height: window.width / 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    styleButtonNext: {
        width: window.width / 2,
        backgroundColor: '#FF8700',
        borderRadius: 50,
        marginBottom: 10,
        marginRight: 10,
    }

})