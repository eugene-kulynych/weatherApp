import {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  PermissionStatus as PermissionStatusAndroid,
} from 'react-native';
import {PERMISSIONS, request, PermissionStatus} from 'react-native-permissions';

export const useLocationPermission = () => {
  const [locationPermission, setLocationPermission] = useState<
    PermissionStatus | PermissionStatusAndroid | null
  >(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        setLocationPermission(result);
      } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        setLocationPermission(granted);
      }
    };

    requestLocationPermission();
  }, []);

  return locationPermission;
};
