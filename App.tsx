import React, {useEffect} from 'react';
import {ActivityIndicator, Alert, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import NavigationAction from './src/navigation/NavigationAction';
import RootStack from './src/navigation/RootStack';
const {persistor, store} = configureStore();
import NetInfo from '@react-native-community/netinfo';
import GlobalFunctions from './src/heleper/Global';
import Toast from 'react-native-toast-message';
// import messaging from '@react-native-firebase/messaging';

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }
export default function App() {
  NetInfo.addEventListener((state: any) => {
    GlobalFunctions.isInternetOn = state.isConnected;
  });

  // requestUserPermission();

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator color={'#ffffff'} />}
        persistor={persistor}>
        <NavigationContainer
          ref={navigatorRef => {
            navigatorRef != null
              ? NavigationAction.setTopLevelNavigator(navigatorRef)
              : null;
          }}>
          <StatusBar barStyle="dark-content" />
          <RootStack />
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
