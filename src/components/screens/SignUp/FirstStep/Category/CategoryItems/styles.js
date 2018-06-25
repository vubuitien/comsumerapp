import {
  StyleSheet,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');


export const styles = StyleSheet.create({
  checkCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: window.width - 40,
    minHeight: 55,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center'
  },
});
