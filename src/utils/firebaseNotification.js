import messaging from '@react-native-firebase/messaging';

// Stroage
import {appStorage} from './appStorage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getDeviceToekn();
  }
};

const getDeviceToekn = async () => {
  const fcmToken = await messaging().getToken();
  const localToken = appStorage.getItem('@device.token');
  console.log('device token ::', fcmToken);
  try {
    if (!localToken) {
      appStorage.setItem('@device.token', fcmToken);
    }
  } catch (error) {
    console.log('error', error);
  }
};

export const backgroundMessageHandler = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(
      'Message handled in the background! :::: ',
      remoteMessage.notification,
    );
  });
};
