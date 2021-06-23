import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../css/profile.style';
import NavigationAction from '../navigation/NavigationAction';

export default function Profile() {
  return (
    <View style={profile.container}>
      <SafeAreaView style={profile.safeArea}>
        <View style={profile.content}>
          <TouchableOpacity onPress={() => NavigationAction.toggleDrawer()}>
            <Text>{'Open Menu'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
