import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import home from '../css/home.style';
import GlobalFunctions from '../heleper/Global';
import NavigationAction from '../navigation/NavigationAction';

export default function Home() {
  return (
    <View style={home.container}>
      <SafeAreaView style={home.safeArea}>
        <View style={home.content}>
          <TouchableOpacity onPress={() => NavigationAction.toggleDrawer()}>
            <Text>{'Open Menu'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              GlobalFunctions.showResponseMessage({
                status: 200,
                message: 'Success',
              })
            }>
            <Text>{'Succes Toast'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              GlobalFunctions.showResponseMessage({
                status: 400,
                error: 'Error',
              })
            }>
            <Text>{'Error Toast'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              GlobalFunctions.showResponseMessage({
                message: 'Info',
              })
            }>
            <Text>{'Info Toast'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
