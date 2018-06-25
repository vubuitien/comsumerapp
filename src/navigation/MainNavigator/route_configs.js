import FirstScreen from '../../components/screens/Home/FirstScreen';
import SecondScreen from '../../components/screens/Home/SecondScreen';
import AccountNavigator from '../AccountNavigator';
import LoginNavigator from './SignupNavigator';
import Welcome from '../../components/screens/Login/Welcome';
import UserProfile from '../../components/screens/UserProfile'
import EditUserProfile from '../../components/screens/UserProfile/EditUserProfile';
import ThanksSignUp from '../../components/screens/SignUp/ThanksSignUp'
const FirstScreenRoute = { screen: FirstScreen };

const SecondScreenRoute = { screen: SecondScreen };

const AccountRoute = { screen: AccountNavigator };

const LoginRoute = { screen: LoginNavigator };

const WelcomeScreen = { screen: Welcome };

const EditUserProfileScreen = { screen: EditUserProfile };

const UserProfileScreen = { screen: UserProfile }
const ThanksSignUpScreen = { screen: ThanksSignUp }
export default RouteConfig = {
  Login: LoginRoute,
  FirstScreen: FirstScreenRoute,
  SecondScreen: SecondScreenRoute,
  Account: AccountRoute,
  ThanksSignUp: ThanksSignUpScreen,
  UserProfile: UserProfileScreen,
  EditUserProfile: EditUserProfileScreen,
  Welcome: WelcomeScreen,
};