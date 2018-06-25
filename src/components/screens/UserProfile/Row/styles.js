import { StyleSheet } from 'react-native';
import {Fonts} from '../../../../constants'
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center'
  },
  icon: {
    fontSize: 18,
    color: '#42485D'
  },
  title: {
    fontSize: 15,
    color: '#42485D',
    fontFamily:Fonts.ubuntuItalic,
    marginLeft: 3
  }
});

