import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textField: {
    color: '#525467',
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: 24,
  },
  inputField: {
    marginTop: -30,
  },
  styleSelect: {
    backgroundColor: '#D73F00',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 8
  },
  styleSelectActive: {
    backgroundColor: '#FF8B04',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 8
  },
  styleTextSelect: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: '3%',
    paddingRight: '3%',
    color: '#981F04',
    fontSize: 26,
  },
  styleTextSelectActive: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: '3%',
    paddingRight: '3%',
    color: '#fff',
    fontSize: 26,
  },
  leftRadius: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  rightRadius: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  }
});
