import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Module from '../module';
import Drawer from './Drawer';
const Stack = createStackNavigator();

export class RootStack extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Register" component={Module.Register} />
          <Stack.Screen name="Login" component={Module.Login} />
          <Stack.Screen
            name="Home"
            component={Drawer}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </View>
    );
  }
}

export default RootStack;
