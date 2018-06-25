import t from 'tcomb-form-native';
import React from 'react';
import { View, Text } from 'react-native';
import { BoxTextInput, StyledTextInput } from '../../../../shared';
import styles from './styles';

class BirthdayFactory extends t.form.Component {
  getTemplate() {
    return (locals) => {
      const {
        placeholderMonth,
        onChangeMonth,
        valueMonth,
        placeholderDay,
        onChangeDay,
        valueDay,
        placeholderYear,
        onChangeYear,
        valueYear,
        text
      } = locals;
      const boxBirthday = styles.boxBirthday;
      const textStyle = styles.textStyle;
      const textStyleDay = styles.textInputDay;
      const textStyleYear = styles.textInputYear;

      return (
        <View style={boxBirthday}>
          <BoxTextInput margin>
            <StyledTextInput
              placeholder={placeholderMonth}
              onChange={onChangeMonth}
              value={valueMonth}
              style={textStyleDay}
              underline={'transparent'}
            />
          </BoxTextInput>
          <Text style={textStyle}>{text}</Text>
          <BoxTextInput margin>
            <StyledTextInput
              placeholder={placeholderDay}
              onChange={onChangeDay}
              value={valueDay}
              style={textStyleDay}
              underline={'transparent'}
            />
          </BoxTextInput>
          <Text style={textStyle}>{text}</Text>
          <BoxTextInput margin>
            <StyledTextInput
              placeholder={placeholderYear}
              onChange={onChangeYear}
              value={valueYear}
              style={textStyleYear}
              underline={'transparent'}
            />
          </BoxTextInput>
        </View>
      );
    };
  }

  getLocals() {
    const locals = super.getLocals();
    const {
      placeholderMonth,
      onChangeMonth,
      valueMonth,
      placeholderDay,
      onChangeDay,
      valueDay,
      placeholderYear,
      onChangeYear,
      valueYear,
      text
    } = this.props.options;

    locals.options = this.state.options;
    locals.text = text;
    locals.placeholderMonth = placeholderMonth;
    locals.onChangeMonth = onChangeMonth;
    locals.valueMonth = valueMonth;
    locals.placeholderDay = placeholderDay;
    locals.onChangeDay = onChangeDay;
    locals.valueDay = valueDay;
    locals.placeholderYear = placeholderYear;
    locals.onChangeYear = onChangeYear;
    locals.valueYear = valueYear;
    return locals;
  }
}

export default BirthdayFactory;
