import t from 'tcomb-form-native';
import {
  TextInputDash,
  PasswordDash
} from '../../shared/Form/template';
import I18n from '../../../I18n';

const fields = () => {
  return {
    username: {
      type: t.String,
      label: I18n.t('signup.user_name'),
      placeholder: I18n.t('signup.user_name'),
      template: TextInputDash
    },
    email: {
      type: t.String,
      label: I18n.t('signup.email'),
      placeholder: I18n.t('signup.email'),
      template: TextInputDash
    },
    password: {
      type: t.String,
      label: I18n.t('signup.password'),
      placeholder: I18n.t('signup.password'),
      template: PasswordDash
    },
    confirmpassword: {
      type: t.String,
      label: I18n.t('signup.confirm_password'),
      placeholder: I18n.t('signup.confirm_password'),
      template: PasswordDash
    },
  };
};
export default fields;
