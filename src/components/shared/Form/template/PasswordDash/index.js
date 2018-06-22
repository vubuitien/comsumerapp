import React from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyledTextInput, BoxTextInput } from '../../../../shared';
import { styles } from './styles';

const PasswordDash = (locals) => {
  return (
    <BoxTextInput>
      <View style={styles.boxInput}>
        <Icon name={locals.nameIcon} style={styles.icon} />
        <StyledTextInput
          placeholder={locals.placeholder}
          onChange={locals.onChange}
          value={locals.value}
          style={styles.textInput}
          underline={'transparent'}
          secure
        />
      </View>
    </BoxTextInput>
  );
};
export default PasswordDash;
