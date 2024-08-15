import React, {useMemo} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {WeatherEntity} from '../../types/weather-entity.ts';
import {cloudCover} from '../../helpers/cloudCover.ts';
import {liftedIndex} from '../../helpers/liftedIndex.ts';
import {
  precipitationType,
  PrecipitationEnum,
} from '../../helpers/precipitation.ts';
import {calculateFutureDate} from '../../helpers/calculateDate.ts';
import {imgPath} from '../../helpers/imgPath.ts';
import {getWeatherTypes} from '../../helpers/weatherTypes.ts';
import {windSpeed} from '../../helpers/windSpeed.ts';
import {styles} from '../../styles/weatherTile.style.ts';

export const WeatherTile: React.FC<WeatherEntity> = entity => {
  const {type, color} = precipitationType(
    entity.prec_type as keyof typeof PrecipitationEnum,
  );
  const isNight = entity.weather.includes('night');

  const bg = !isNight
    ? require('../../assets/background/day.jpg')
    : require('../../assets/background/night.jpg');

  const textColor = !isNight ? '#35558A' : '#EFECE6';

  console.log(entity.rh2m);
  const date = useMemo(
    () => calculateFutureDate(entity.timepoint).toLocaleString(),
    [entity.timepoint],
  );
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bg} source={bg} />
      <View style={styles.inner}>
        <Text style={styles.headers}>{date}</Text>
        <View style={styles.imageContainer}>
          <Image
            // left: isNight ? -66 : 0
            style={{...styles.image}}
            // @ts-ignore
            source={imgPath(entity.weather)}
          />
        </View>
        <Text style={{...styles.text, color: textColor}}>
          {getWeatherTypes(entity.weather)}
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          Temperature: {entity.temp2m}C
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          Cloud Cover: {cloudCover(entity.cloudcover)}
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          Lifted Index: {liftedIndex(entity.lifted_index)}
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          Relative Humidity: {entity.rh2m}
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          Wind Direction: {entity.wind10m.direction}
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          Wind Speed: {windSpeed(entity.wind10m.speed)}
        </Text>
      </View>
    </View>
  );
};
