import {createStackNavigator,createAppContainer } from 'react-navigation';
import * as Routes from '../../constants/routes';
import  IntroScreen  from '../../screens/Intro';
import  TestScreen  from '../../screens/ReactTest';
import RestartScreen from '../../screens/RestartScreen';


 const RootNavigator = createStackNavigator ({
    [Routes.INTRO_SCREEN]:  {screen: IntroScreen} ,
     [Routes.TEST_SCREEN]: {screen: TestScreen} ,
     'RestartScreen' : {screen : RestartScreen}
}, {
    headerMode: 'none',
});
export const AppNav = createAppContainer(RootNavigator);
export default RootNavigator;