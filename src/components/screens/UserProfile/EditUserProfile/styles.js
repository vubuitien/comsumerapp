import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../../../constants';
const window = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerBar: {
        flexDirection: 'row',
        backgroundColor: '#9D0000',
    },
    editProfile: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: 'hidden',
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#CECECE',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    icon: {
        color: '#CECECE',
        fontSize: 85
    },
    textImage: {
        fontSize: 13,
        color: '#b2b2b2',
        bottom: 13
    },
    addProfile: {
        flexDirection: 'row'
    },
    textAdd: {
        fontSize: 16,
        fontFamily:Fonts.ubuntuBold,
        color: '#48465B'
    },
    textProfile: {
        fontSize: 16,
        color: '#48465B',
        fontFamily:Fonts.ubuntuRegular,
        marginLeft: 4
    },
    textChild: {
        fontSize: 12,
        color: '#b2b2b2',
        fontFamily:Fonts.ubuntuItalic
    },
    middle: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginLeft: '3%',
        marginRight: '3%',
        borderBottomColor: '#b2b2b2',
        borderBottomWidth: 1,
        marginBottom: 15
    },
    infomation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    role: {
        fontSize: 15,
        color: '#48465B',
        fontFamily:Fonts.ubuntuBoldItalic,
    },
    position: {
        fontSize: 14,
        color: '#D84B1C',
        fontFamily:Fonts.ubuntuBoldItalic,
        marginLeft: 3
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#b2b2b2',
        borderBottomWidth: 1,
        bottom: 10
    },
    textInputName: {
        width: 260,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        top: 8
    },
    textInputDetail: {
        width: 260,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        top: 8
    },
    textInput: {
        color: '#b2b2b2',
        fontSize: 13,
        fontFamily:Fonts.ubuntuItalic,
        top: 12
    },
    user: {
        flexDirection: 'column',
        marginTop: 30,
        paddingBottom: 20,
        paddingRight: '4%'
    },
    profileData: {
        width: 310,
        justifyContent: 'center',
        fontSize: 14,
        fontStyle: 'italic',
        color: '#303849'
    },
    boxRowMap: {
        bottom: 20
    },
    boxRowPhone: {
        bottom: 40
    },
    password: {
        flexDirection: 'row'
    },
    textPassword: {
        fontSize: 15,
        color: '#48465B',
        marginRight: 10,
        fontFamily:Fonts.ubuntuBoldItalic,
    },
    email: {
        bottom: 30
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    nextButton: {
        width: '100%',
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FF8700',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingLeft: 10,
        paddingRight: 10
    },
    styleNoty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleNoty1: {
        width: window.width - 20,
        height: window.width / 4,
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    textNoti1: {
        fontSize: 16,
        fontFamily: Fonts.ubuntuRegular,
        color: '#fff'
    },
    textNoti2: {
        fontSize: 16,
        fontFamily: Fonts.ubuntuRegular,
        paddingLeft: 10,
        color: '#fff'
    },
});