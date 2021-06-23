import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class CommonNPM extends Component {
  render() {
    return (
      <View>
        <Text>Navigation</Text>
        <Text>
          {
            '@react-navigation/bottom-tabs @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view'
          }
        </Text>
        <Text>Permission </Text>
        <Text>{'react-native-permissions' + '& ios specific pods'}</Text>
        <Text>Redux </Text>
        <Text>
          {
            '@react-native-community/async-storage react-redux redux redux-persist redux-saga redux-logger'
          }
        </Text>
        <Text>Design</Text>
        <Text>
          react-native-static-safe-area-insets @react-native-community/slider
          react-native-circle-slider @twotalltotems/react-native-otp-input
          lottie-react-native lottie-ios react-native-raw-bottom-sheet
          react-native-tab-view
        </Text>
      </View>
    );
  }
}
