export const liftedIndex = (index: number): string => {
  switch (index) {
    case -10:
      return 'Below -7';
    case -6:
      return '-7 to -5';
    case -4:
      return '-5 to -3';
    case -1:
      return '-3 to 0';
    case 2:
      return '0 to 4';
    case 6:
      return '4 to 8';
    case 10:
      return '8 to 11';
    case 15:
      return 'Over 11';
    default:
      return 'Lifted index is undefined';
  }
};
