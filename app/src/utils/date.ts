export const millisecondsDiffBetweenDates = (start: Date, end: Date) => {
  return end.getTime() - start.getTime();
};

export const getHourFormated = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}h ${formattedMinutes}m`;
};

export const getTimer = (startDate: Date) => {
  const now = new Date();
  const start = new Date(startDate);

  const diff = millisecondsDiffBetweenDates(start, now);

  const timerUpdated = getHourFormated(diff);

  return timerUpdated;
};
