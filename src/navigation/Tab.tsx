import React from 'react';
import * as Module from '../module';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();
export default function Tab() {
  return (
    <Tabs.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused}) => {
      //     let image;
      //     if (route.name == 'Map') {
      //       image = focused ? Images.IcMapS : Images.IcMap;
      //     } else if (route.name == 'Wallet') {
      //       image = focused ? Images.IcWalletS : Images.IcWallet;
      //     } else if (route.name == 'Profile') {
      //       image = focused ? Images.IcProfileS : Images.IcProfile;
      //     } else if (route.name == 'Notifications') {
      //       image = focused ? Images.IcBellS : Images.IcBell;
      //     } else if (route.name == 'Support') {
      //       image = focused ? Images.IcSupportS : Images.IcSupport;
      //     }
      //     return (
      //       <Image
      //         source={image}
      //         style={styles.tabImage}
      //         resizeMode={'contain'}
      //       />
      //     );
      //   },
      // })}
      tabBarOptions={{
        activeTintColor: '#1B5C8C',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={Module.Home} />
      <Tabs.Screen name="Profile" component={Module.Profile} />
    </Tabs.Navigator>
  );
}
