import {useEffect, useState} from 'react';
import axios from 'axios';
import {AxiosWeatherResponse} from '../types/weather-entity.ts';

export type FetchParams = {
  lon?: number;
  lat?: number;
  output: 'json' | 'xml';
  unit: 'metric';
  ac: 0;
};

export const useFetch = (url: string, params: FetchParams) => {
  const [weatherData, setWeatherData] = useState<AxiosWeatherResponse>(
    {} as AxiosWeatherResponse,
  );
  const [error, setError] = useState<string>('');
  const {lon, lat, output, unit, ac} = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<AxiosWeatherResponse>(`${url}?`, {
          params: {
            lon,
            lat,
            ac,
            unit,
            output,
            tzshift: 0,
          },
        });

        if (res.status === 200) {
          const result = res.data;
          setWeatherData(result);
        } else {
          console.error('Error fetching data:', res.statusText);
          setError(res.statusText);
        }
      } catch (e: any) {
        console.error('Fetch error:', e);
        setError(e.message);
      }
    };

    fetchData();
  }, [lon, lat, output, unit, ac, url]);

  return {weatherData, error};
};
