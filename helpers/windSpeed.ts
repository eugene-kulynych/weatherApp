export const windSpeed = (index: number): string => {
  const idx: Record<number, string> = {
    1: 'Below 0.3m/s',
    2: '0.3-3.4m/s',
    3: '3.4-8.0m/s',
    4: '8.0-10.8m/s',
    5: '10.8-17.2m/s',
    6: '17.2-24.5m/s',
    7: '24.5-32.6m/s',
    8: 'Over 32.6m/s',
  };

  return idx[index];
};
