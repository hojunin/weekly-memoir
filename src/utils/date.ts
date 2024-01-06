import dayjs from 'dayjs';

/**
 * year 기준으로 1주차부터 52주차를 계산하는 함수
 * @param {string} year
 * @returns {string[]}
 */
export const calcWeeks = (year: string) => {
  const weeks = [];
  const firstDayOfYear = dayjs(`${year}-01-01`);

  let firstDayOfFirstWeek = firstDayOfYear;
  if (firstDayOfYear.day() === 0) {
    firstDayOfFirstWeek = firstDayOfYear.add(1, 'day');
  } else {
    firstDayOfFirstWeek = firstDayOfYear.subtract(
      firstDayOfYear.day() - 1,
      'day',
    );
  }

  for (let i = 1; i <= 52; i++) {
    const firstDayOfWeek = firstDayOfFirstWeek.add((i - 1) * 7, 'day');
    const lastDayOfWeek = firstDayOfWeek.add(6, 'day');

    const weekString = `${i}주차(${firstDayOfWeek.format(
      'M월 D일',
    )} ~ ${lastDayOfWeek.format('M월 D일')})`;
    weeks.push(weekString);
  }

  return weeks;
};

export const getCurrentYear = () => {
  return String(dayjs().year());
};

export const getCurrentWeek = () => {
  const today = dayjs();
  const startOfYear = today.startOf('year');
  const daysDiff = today.diff(startOfYear, 'day');
  const weekNumber = Math.ceil((daysDiff + startOfYear.day()) / 7);

  return String(weekNumber);
};
