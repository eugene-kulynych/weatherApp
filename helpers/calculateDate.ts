export const calculateFutureDate = (hoursFromNow: number) => {
  const currentDate = new Date();

  const futureDate = new Date(
    currentDate.getTime() + hoursFromNow * 60 * 60 * 1000,
  );

  return futureDate;
};
