import React from 'react';
import * as Module from '../module';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Tab from './Tab';
export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      edgeWidth={100}
      minSwipeDistance={100}
      initialRouteName={'Home'}
      drawerStyle={{width: '50%'}}
      screenOptions={{gestureEnabled: true}}
      drawerContent={props => <Module.SideMenu />}>
      <Drawer.Screen name="Home" component={Tab} />
    </Drawer.Navigator>
  );
}
