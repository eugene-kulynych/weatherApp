import {useEffect, useState} from 'react';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {Alert} from 'react-native';
import {PermissionStatus} from 'react-native-permissions';
import {PermissionStatus as PermissionStatusAndroid} from 'react-native';

export const useUserLocation = (
  locationPermission: PermissionStatus | PermissionStatusAndroid | null,
) => {
  const [location, setLocation] = useState<GeoPosition | null>(null);

  useEffect(() => {
    if (locationPermission === 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          setLocation(position);
        },
        error => {
          Alert.alert('Error', error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [locationPermission]);

  return location;
};
