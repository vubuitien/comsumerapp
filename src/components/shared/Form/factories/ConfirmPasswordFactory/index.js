import t from 'tcomb-form-native';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BoxTextInput, StyledTextInput } from '../../../../shared';
import styles from './styles';

class ConfirmPasswordFactory extends t.form.Component {
  getTemplate() {
    return (locals) => {
      const {
        nameIcon,
        placeholder,
        onChange,
        value,
      } = locals;
      const btnStyle = styles.boxInput;
      const textStyle = styles.textInput;
      const iconStyle = styles.icon;

      return (
        <BoxTextInput>
          <View style={btnStyle}>
            <Icon name={nameIcon} style={iconStyle} />
            <StyledTextInput
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              style={textStyle}
              underline={'transparent'}
              secure
            />
          </View>
        </BoxTextInput>
      );
    };
  }

  getLocals() {
    const locals = super.getLocals();
    const {
      nameIcon,
      placeholder,
      onChange,
      value,
    } = this.props.options;

    locals.options = this.state.options;
    locals.nameIcon = nameIcon;
    locals.placeholder = placeholder;
    locals.onChange = onChange;
    locals.value = value;
    return locals;
  }
}

export default ConfirmPasswordFactory;
