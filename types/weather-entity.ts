import {WeatherType} from './weather-type.ts';

export interface AxiosWeatherResponse {
  product: string;
  init: string;
  dataseries: WeatherEntity[];
}
export interface WeatherEntity {
  timepoint: number;
  cloudcover: number;
  lifted_index: number;
  prec_type: string;
  prec_amount: number;
  temp2m: number;
  rh2m: string;
  wind10m: Wind10m;
  weather: WeatherType;
}
export interface Wind10m {
  direction: string;
  speed: number;
}
