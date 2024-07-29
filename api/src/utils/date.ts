import dayjs from 'dayjs';

export const formatDate = (date: Date) => {
  return dayjs(date).format('DD/MM/YY');
};

const formatHours = (hours: number, minutes: number) => {
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}h ${formattedMinutes}m`;
};

export const hoursBetweenDates = (start_date: Date, end_date: Date) => {
  const start = dayjs(start_date);
  const end = dayjs(end_date);

  const totalMinutes = end.diff(start, 'minute');

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return formatHours(hours, minutes);
};

export const getHourFormated = (date: Date) => {
  const hour = dayjs(date).hour();
  const minute = dayjs(date).minute();

  return formatHours(hour, minute);
};
