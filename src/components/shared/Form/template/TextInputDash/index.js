import React from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyledTextInput, BoxTextInput } from '../../../../shared';
import { styles } from './styles';

const TextInputDash = (locals) => {
  const style = locals.stylesheet.default ? locals.stylesheet.default : styles.textInput;
  return (
    <BoxTextInput>
      <View style={styles.boxInput}>
        <Icon name={locals.nameIcon} style={styles.icon} />
        <StyledTextInput
          placeholder={locals.placeholder}
          onChange={locals.onChange}
          value={locals.value}
          style={style}
          underline={'transparent'}
        />
      </View>
    </BoxTextInput>
  );
};
export default TextInputDash;
