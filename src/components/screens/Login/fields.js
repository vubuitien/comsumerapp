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
      label: I18n.t('login.user_name'),
      placeholder: I18n.t('login.user_name'),
      nameIcon: 'account',
      value: 'merchant@closedeal.com',
      template: TextInputDash
    },
    password: {
      type: t.String,
      label: I18n.t('login.password'),
      placeholder: I18n.t('login.password'),
      nameIcon: 'lock',
      value: '123456',
      template: PasswordDash
    },
  };
};
export default fields;
