import t from 'tcomb-form-native';
import {
  TextInputDash
} from '../../../shared/Form/template';
import I18n from '../../../../I18n';

const fields = () => {
  return {
    recoverpassword: {
      type: t.String,
      placeholder: I18n.t('login.username_or_email'),
      template: TextInputDash,
      label: I18n.t('login.username_or_email'),
    },
  };
};
export default fields;
