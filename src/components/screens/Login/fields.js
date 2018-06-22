import t from 'tcomb-form-native';
import {
  UserFactory,
  PasswordFactory,
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
    password: {
      type: t.String,
      factory: PasswordFactory,
      label: I18n.t('signup.password'),
      placeholder: I18n.t('signup.password'),
      nameIcon: 'lock',
    },
  };
};
export default fields;
