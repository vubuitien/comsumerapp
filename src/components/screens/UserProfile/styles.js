import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Fonts } from '../../../constants';
const window = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerBar: {
        flexDirection: 'row',
        backgroundColor: '#F03500',
        fontFamily: Fonts.ubuntuRegular
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F03500',
        paddingBottom: 20
    },
    edtiButton: {
        backgroundColor: '#FF8700',
        height: 30,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    avata: {
        width: 140,
        height: 140,
        borderRadius: 70,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#fff'
    },
    name: {
        fontSize: 24,
        fontFamily: Fonts.ubuntuBold,
        color: '#fff',
        lineHeight: 24,
        marginTop: 5
    },
    username: {
        fontSize: 13,
        fontFamily: Fonts.ubuntuBold,
        color: '#fff',
    },
    infomation: {
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDate: {
        width: window.width,
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 10
    },
    textDate1: {
        fontFamily: Fonts.ubuntuBoldItalic,
        fontSize: 14,
        color: '#48465B',
    },
    textDate2: {
        fontFamily: Fonts.ubuntuItalic,
        fontSize: 14,
        color: '#48465B'
    },
    role: {
        fontSize: 18,
        color: '#48465B',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    position: {
        fontSize: 20,
        color: '#D84B1C',
        fontFamily: Fonts.ubuntuItalic,
        lineHeight: 20
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPassword: {
        fontSize: 15,
        color: '#48465B',
        marginRight: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    containerCoin: {
        width: window.width,
        height: window.width / 6 + 10,
    },
    wrapper: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#b2b2b2',
        marginRight: 5,
        marginLeft: 5,
    },
    containerCoin1: {
        borderRightWidth: 1,
        borderRightColor: '#b2b2b2',
        width: window.width / 2 - 13,
        height: window.width / 6,
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerStar: {
        width: window.width / 2,
        height: window.width / 6,
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagesvg1: {
        width: window.width / 7 + 10,
        height: window.width / 7,
    },
    sumCoin: {
        width: window.width / 4,
        height: window.width / 7,
        marginLeft: 8
    },
    sum1: {
        fontFamily: Fonts.ubuntuBold,
        fontSize: 24,
        color: '#383A50'
    },
    sum2: {
        fontFamily: Fonts.ubuntuRegular,
        fontSize: 10,
        color: "#5E5E63"
    },
    MainContainer: {
        width: window.width / 2,
        height: window.width / 6,
        marginLeft: window.width / 15,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    childView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

    StarImage: {
        color: '#FF8700',
        fontSize: 32
    },

    textStyle: {
        fontSize: 10,
        fontFamily: Fonts.ubuntuRegular,
        marginTop: 2,
        marginLeft: 8
    },
    textStyle1: {
        color: "#5E5E63",
        fontFamily: Fonts.ubuntuRegular,
    },
    textStyle2: {
        fontSize: 10,
        fontFamily: Fonts.ubuntuBold,
        color: '#383A50'
    }
});