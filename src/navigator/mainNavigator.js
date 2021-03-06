import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging2103941Navigator from '../features/Messaging2103941/navigator';
import SignUp23103940Navigator from '../features/SignUp23103940/navigator';
import NotificationList5103938Navigator from '../features/NotificationList5103938/navigator';
import Settings6103937Navigator from '../features/Settings6103937/navigator';
import CalendarView8103935Navigator from '../features/CalendarView8103935/navigator';
import TimeTracking12103931Navigator from '../features/TimeTracking12103931/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging2103941: { screen: Messaging2103941Navigator },
SignUp23103940: { screen: SignUp23103940Navigator },
NotificationList5103938: { screen: NotificationList5103938Navigator },
Settings6103937: { screen: Settings6103937Navigator },
CalendarView8103935: { screen: CalendarView8103935Navigator },
TimeTracking12103931: { screen: TimeTracking12103931Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
