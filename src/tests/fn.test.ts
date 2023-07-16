const { getTime, shuffle } = require('../fn/fn');
const { test, describe, expect } = require('@jest/globals');

describe('getTime', () => {
  test('should return "00" minutes and seconds if either date1 or date2 is null', () => {
    expect(getTime(null, new Date())).toEqual({ min: '00', sec: '00' });
    expect(getTime(new Date(), null)).toEqual({ min: '00', sec: '00' });
    expect(getTime(null, null)).toEqual({ min: '00', sec: '00' });
  });

  test('should calculate the difference between date2 and date1 correctly', () => {
    const date1 = new Date('2022-01-01T00:00:00');
    const date2 = new Date('2022-01-01T00:01:30');
    expect(getTime(date1, date2)).toEqual({ min: '01', sec: '30' });
  });

  test('should add leading zeros to minutes and seconds if necessary', () => {
    const date1 = new Date('2022-01-01T00:00:00');
    const date2 = new Date('2022-01-01T00:00:05');
    expect(getTime(date1, date2)).toEqual({ min: '00', sec: '05' });

    const date3 = new Date('2022-01-01T00:00:00');
    const date4 = new Date('2022-01-01T00:01:00');
    expect(getTime(date3, date4)).toEqual({ min: '01', sec: '00' });
  });
});

describe('shuffle', () => {
  test('should shuffle the elements in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);

    expect(shuffledArray.length).toBe(array.length);

    array.forEach((element) => {
      expect(shuffledArray).toContain(element);
    });
  });

  test('should return an empty array when given an empty array', () => {
    const array: any[] = [];
    const shuffledArray = shuffle(array);

    expect(shuffledArray).toEqual([]);
  });
});
