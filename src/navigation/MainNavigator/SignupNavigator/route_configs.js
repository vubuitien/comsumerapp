import SignUp from '../../../components/screens/SignUp';
import Login from '../../../components/screens/Login';
import FirstStep from '../../../components/screens/SignUp/FirstStep';
import GetMore from '../../../components/screens/SignUp/GetMore';
import RecoverPassword from '../../../components/screens/Login/RecoverPassword';
import Welcome from '../../../components/screens/Login/Welcome';
import UserProfile from '../../../components/screens/UserProfile';
import EditUserProfile from '../../../components/screens/UserProfile/EditUserProfile';
import ThanksSignUp from '../../../components/screens/SignUp/ThanksSignUp';

export default RouteConfig = {
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  FirstStep: { screen: FirstStep },
  GetMore: { screen: GetMore },
  RecoverPassword: { screen: RecoverPassword },
  ThanksSignUp: { screen: ThanksSignUp },
  UserProfile: { screen: UserProfile },
  EditUserProfile: { screen: EditUserProfile },
  Welcome: { screen: Welcome },
};
