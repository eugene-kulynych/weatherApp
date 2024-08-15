export enum PrecipitationEnum {
  snow = 'snow',
  rain = 'rain',
  frzr = 'freezing rain',
  icep = 'ice pellets',
  none = 'none',
}

type PrecipitationTypeReturn = {
  type: PrecipitationEnum;
  color: string;
};

const PrecipitationTypeColor = {
  [`${PrecipitationEnum.snow}`]: 'white',
  [`${PrecipitationEnum.rain}`]: '#94F4F4',
  [`${PrecipitationEnum.frzr}`]: '#880FC9',
  [`${PrecipitationEnum.icep}`]: '#E10BE2',
};
export const precipitationType = (
  type: keyof typeof PrecipitationEnum,
): PrecipitationTypeReturn => {
  return {
    type: PrecipitationEnum[type],
    color: PrecipitationTypeColor[type] || '',
  };
};
