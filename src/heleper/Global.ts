import {Dimensions, Alert} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
import Toast from 'react-native-toast-message';
import * as KEYS from './Keys';
import Strings from './strings';
import PushNotification, {
  PushNotificationObject,
} from 'react-native-push-notification';
import {PushNotificationPermissions} from '@react-native-community/push-notification-ios';
import {Colors} from './Colors';
export default {
  mask: '[0000000000]',
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    scale: Dimensions.get('screen').scale,
    fontScale: Dimensions.get('window').fontScale,
  },
  region: {
    latitude: 23.0225,
    longitude: 72.5714,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  },
  user_location: {
    latitude: 23.0225,
    longitude: 72.5714,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  },
  regionFrom(lat: any, lon: any, distance: any) {
    distance = distance / 2;
    const circumference = 40075;
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const angularDistance = distance / circumference;

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta = Math.abs(
      Math.atan2(
        Math.sin(angularDistance) * Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
      ),
    );

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta,
    };
  },
  GOOGLE_MAP_KEY: 'AIzaSyDxdGgVDO13n8RUf9HwN9T2dfsqXHvKB5I',
  isInternetOn: false,
  getFCMToken: function (): any {
    return DefaultPreference.get(KEYS.FCM_TOKEN);
  },
  setToken: function (value: string) {
    DefaultPreference.set(KEYS.FCM_TOKEN, value).then(val => {});
  },

  setBearerToken: function (value: string) {
    DefaultPreference.set(KEYS.BEARER_TOKEN, value).then(val => {
      console.log(val);
    });
  },
  clearDefaultPrefence: function () {
    DefaultPreference.clearAll();
  },
  showInvalidInput(message: string) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: message,
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 40,
    });
    // Alert.alert(Strings.InvalidInput, message);
  },
  show(message: string) {
    Toast.show({
      type: 'info',
      position: 'top',
      text1: message,
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 40,
    });
  },
  showError(error: string) {
    Alert.alert('Error', error);
  },
  showErrorWithTitle(title: string, error: string) {
    Alert.alert(title, error);
  },
  showResponseMessage(response: any) {
    setTimeout(() => {
      if (response.message != undefined) {
        if (typeof response.message == 'string') {
          // Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
          Toast.show({
            type:
              response.status != undefined
                ? response.status == 200
                  ? 'success'
                  : 'error'
                : 'info',
            position: 'top',
            text1: response.message,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 40,
          });
        } else {
          var string = '';
          for (const msg in response.message) {
            string =
              string + (string != '' ? '\n' : '') + response.message[msg];
          }
          Toast.show({
            type:
              response.status != undefined
                ? response.status == 200
                  ? 'success'
                  : 'error'
                : 'info',
            position: 'top',
            text1: string,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 40,
          });
        }
      } else {
        if (typeof response.error == 'string') {
          Toast.show({
            type:
              response.status != undefined
                ? response.status == 200
                  ? 'success'
                  : 'error'
                : 'info',
            position: 'top',
            text1: response.error,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 40,
          });
        } else {
          var string = '';
          for (const msg in response.error) {
            string = string + (string != '' ? '\n' : '') + response.error[msg];
          }
          Toast.show({
            type:
              response.status != undefined
                ? response.status == 200
                  ? 'success'
                  : 'error'
                : 'info',
            position: 'top',
            text1: string,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
          });
        }
      }
    }, 1000);
  },
  getDistanceFromLatLonInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  },

  deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  },

  //   localNotication(id: number, title: string, message: string, badge: string) {
  //     try {
  //       PushNotification.createChannel(
  //         {
  //           channelId: 'Kwik',
  //           channelName: 'Kwik',
  //           playSound: true,
  //           soundName: 'default',
  //           importance: 4,
  //           vibrate: false,
  //         },
  //         created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     var notification: PushNotificationObject = {message: message};
  //     notification.channelId = 'Kwik';
  //     notification.id = id;
  //     notification.title = title;
  //     notification.number = Number(badge);
  //     (notification.color = Colors.blue), (notification.priority = 'high');
  //     PushNotification.localNotification(notification);
  //   },
  getSecondToHour(remaining_seconds: number) {
    remaining_seconds = Number(remaining_seconds);
    var hrs = Math.floor(remaining_seconds / 3600);
    return hrs < 10 ? String('0' + hrs) : String(hrs);
  },
  getSecondToMinute(remaining_seconds: number) {
    remaining_seconds = Number(remaining_seconds);
    var mins = Math.floor((remaining_seconds % 3600) / 60);
    return mins < 10 ? String('0' + mins) : String(mins);
  },
};
