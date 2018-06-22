import t from 'tcomb-form-native';
// import {
//   TextInputDash,
//   PasswordDash
// } from '../../shared/Form/template';
import {
  UserFactory,
  PasswordFactory,
  ConfirmPasswordFactory,
  EmailFactory
} from '../../shared/Form/factories';
import I18n from '../../../I18n';

const fields = () => {
  return {
    username: {
      type: t.String,
      factory: UserFactory,
      label: I18n.t('signup.user_name'),
      placeholder: I18n.t('signup.user_name'),
      nameIcon: 'account',
    },
    email: {
      type: t.String,
      factory: EmailFactory,
      label: I18n.t('signup.email'),
      placeholder: I18n.t('signup.email'),
      nameIcon: 'email',
    },
    password: {
      type: t.String,
      factory: PasswordFactory,
      label: I18n.t('signup.password'),
      placeholder: I18n.t('signup.password'),
      nameIcon: 'lock',
    },
    confirmpassword: {
      type: t.String,
      factory: ConfirmPasswordFactory,
      label: I18n.t('signup.confirm_password'),
      placeholder: I18n.t('signup.confirm_password'),
      nameIcon: 'lock',
    },
  };
};
export default fields;
