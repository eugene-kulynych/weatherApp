import {WeatherType} from '../types/weather-type.ts';

export const imgPath = (keyword: WeatherType): string => {
  const imgs: Record<WeatherType, string> = {
    clearday: require('../assets/img/clear_day.png'),
    clearnight: require('../assets/img/clear_night.png'),
    pcloudyday: require('../assets/img/pcloudy_day.png'),
    pcloudynight: require('../assets/img/pcloudy_night.png'),
    mcloudyday: require('../assets/img/cloudy_day.png'),
    mcloudynight: require('../assets/img/cloudy_night.png'),
    cloudyday: require('../assets/img/cloudy_day.png'),
    cloudynight: require('../assets/img/cloudy_night.png'),
    humidday: require('../assets/img/fog_day.png'),
    humidnight: require('../assets/img/fog_night.png'),
    lightrainday: require('../assets/img/lightraint_day.png'),
    lightrainnight: require('../assets/img/lightraint_night.png'),
    oshowerday: require('../assets/img/lightraint_day.png'),
    oshowernight: require('../assets/img/lightraint_night.png'),
    ishowerday: require('../assets/img/lightraint_day.png'),
    ishowernight: require('../assets/img/lightraint_night.png'),
    lightsnowday: require('../assets/img/lightsnow.png'),
    lightsnownight: require('../assets/img/lightsnow.png'),
    rainday: require('../assets/img/rain.png'),
    rainnight: require('../assets/img/rain.png'),
    snowday: require('../assets/img/snow.png'),
    snownight: require('../assets/img/snow.png'),
    rainsnowday: require('../assets/img/rainsnow.png'),
    rainsnownight: require('../assets/img/rainsnow.png'),
  };

  return imgs[keyword];
};
