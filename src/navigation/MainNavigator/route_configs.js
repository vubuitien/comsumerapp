import FirstScreen from '../../components/screens/Home/FirstScreen';
import SecondScreen from '../../components/screens/Home/SecondScreen';
import AccountNavigator from '../AccountNavigator';
import LoginNavigator from './SignupNavigator';

const FirstScreenRoute = { screen: FirstScreen };

const SecondScreenRoute = { screen: SecondScreen };

const AccountRoute = { screen: AccountNavigator };

const LoginRoute = { screen: LoginNavigator };

export default RouteConfig = {
  Login: LoginRoute,
  FirstScreen: FirstScreenRoute,
  SecondScreen: SecondScreenRoute,
  Account: AccountRoute,
};
