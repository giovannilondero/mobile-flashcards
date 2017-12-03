import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { nextDay, catchAsyncErrors } from './helpers';

const NOTIFICATION_KEY = 'Flashcards:notifications';

const notificationOptions = () => ({
  title: 'Flashcards',
  body: 'Quiz time',
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

export const clearLocalNotification = catchAsyncErrors(async () =>
  Notifications.cancelAllScheduledNotificationsAsync(
    await AsyncStorage.removeItem(NOTIFICATION_KEY),
  ),
);

export const setLocalNotification = catchAsyncErrors(async () => {
  const data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY));
  if (data === null) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      Notifications.scheduleLocalNotificationAsync(notificationOptions(), {
        time: nextDay(),
        repeat: 'day',
        // time: new Date().getTime() + 1000,
        // repeat: 'minute',
      });
      AsyncStorage.setItem(NOTIFICATION_KEY, 'true');
    }
  }
});
