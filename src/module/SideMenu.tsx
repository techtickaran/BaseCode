import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import home from '../css/home.style';
import NavigationAction from '../navigation/NavigationAction';

export default function SideMenu() {
  return (
    <View style={home.container}>
      <SafeAreaView style={home.safeArea}>
        <View style={home.content}>
          <TouchableOpacity onPress={() => NavigationAction.toggleDrawer()}>
            <Text>{'Close Menu'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
