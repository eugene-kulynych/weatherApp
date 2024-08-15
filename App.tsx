import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useLocationPermission} from './hooks/useLocationPermission.ts';
import {useUserLocation} from './hooks/useUserLocation.ts';
import {useFetch} from './hooks/useFetch.ts';
import {API} from '@env';
import {WeatherTile} from './components';
import {appStyles} from './styles/app.styles.ts';

function App(): React.JSX.Element {
  const locationPermission = useLocationPermission();
  const location = useUserLocation(locationPermission);
  const {weatherData} = useFetch(API, {
    lon: location?.coords.longitude,
    lat: location?.coords.latitude,
    unit: 'metric',
    output: 'json',
    ac: 0,
  });

  return (
    <SafeAreaView>
      <View>
        <FlatList
          horizontal={true}
          style={appStyles.flatList}
          data={weatherData.dataseries}
          renderItem={({item}) => <WeatherTile {...item} />}
          keyExtractor={item => String(item.timepoint)}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
