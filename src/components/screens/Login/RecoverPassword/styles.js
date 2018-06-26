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
    boxUsername: {
      marginLeft: 50,
      marginRight: 50,
      paddingTop: 20
    },
    buttonRecover: {
      backgroundColor: '#FF8B02',
      borderRadius: 20,
      overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 10,
    }
});
