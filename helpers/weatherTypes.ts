import {WeatherType} from '../types/weather-type.ts';

// http://www.7timer.info/doc.php
const types: Record<WeatherType, string> = {
  clearday: 'Total cloud cover less than 20%',
  clearnight: 'Total cloud cover less than 20%',
  pcloudyday: 'Total cloud cover between 20%-60%',
  pcloudynight: 'Total cloud cover between 20%-60%',
  mcloudyday: 'Total cloud cover between 60%-80%',
  mcloudynight: 'Total cloud cover between 60%-80%',
  cloudyday: 'Total cloud cover over over 80%',
  cloudynight: 'Total cloud cover over over 80%',
  humidday: 'Relative humidity over 90% with total cloud cover less than 60%',
  humidnight: 'Relative humidity over 90% with total cloud cover less than 60%',
  lightrainday:
    'Precipitation rate less than 4mm/hr with total cloud cover more than 80%',
  lightrainnight:
    'Precipitation rate less than 4mm/hr with total cloud cover more than 80%',
  oshowerday:
    'Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%',
  oshowernight:
    'Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%',
  ishowerday:
    'Precipitation rate less than 4mm/hr with total cloud cover less than 60%',
  ishowernight:
    'Precipitation rate less than 4mm/hr with total cloud cover less than 60%',
  lightsnowday: 'Precipitation rate less than 4mm/hr',
  lightsnownight: 'Precipitation rate less than 4mm/hr',
  rainday: 'Precipitation rate over 4mm/hr',
  rainnight: 'Precipitation rate over 4mm/hr',
  snowday: 'Precipitation rate over 4mm/hr',
  snownight: 'Precipitation rate over 4mm/hr',
  rainsnowday: 'Precipitation type to be ice pellets or freezing rain',
  rainsnownight: 'Precipitation type to be ice pellets or freezing rain',
};

export const getWeatherTypes = (keyword: WeatherType): string => {
  return types[keyword];
};
