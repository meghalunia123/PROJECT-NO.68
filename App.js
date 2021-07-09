import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import  fbScreen from './screens/fb';
import inScreen from './screens/in';

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  fb : {screen:fbScreen},
  in : {screen:inScreen}
})
const AppContainer = createAppContainer(TabNavigator)

