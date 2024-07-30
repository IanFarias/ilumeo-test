import {
  formatDate,
  formatHours,
  getHourFormated,
  hoursBetweenDates,
} from '@utils/date';

describe('Date utils', () => {
  it('Should format date string dd/MM/yyyy', () => {
    const date = new Date('2024-07-29T10:00:00');

    const dateStringExpected = `29/07/24`;

    const dateReturned = formatDate(date);

    expect(dateReturned).toEqual(dateStringExpected);
  });

  it('Should return hours string between dates correctly', () => {
    const start = new Date('2024-07-29T10:00:00');
    const end = new Date('2024-07-29T15:00:00');

    const hours = hoursBetweenDates(start, end);

    expect(hours).toEqual('05h 00m');
  });

  it('Should receive numbers of hours and minutes and return string formated 00h 00m', () => {
    const hour = 8;
    const minutes = 46;

    const expected = '08h 46m';

    const returned = formatHours(hour, minutes);

    expect(returned).toEqual(expected);
  });

  it('Should receive date and return hours formated', () => {
    const date = new Date('2024-07-29T10:00:00');

    const expected = '10h 00m';

    const returned = getHourFormated(date);

    expect(returned).toEqual(expected);
  });
});
