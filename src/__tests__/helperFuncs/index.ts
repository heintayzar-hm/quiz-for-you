import { getCurrentTime, getFutureTime, answerFormat } from '../../helper';

describe('getCurrentTime', () => {
  test('returns the current time in milliseconds', () => {
    const currentTime = getCurrentTime();
    expect(typeof currentTime).toBe('number');
    expect(currentTime).toBeCloseTo(Date.now(), -2); // Check if the returned value is close to the current time
  });
});

describe('getFutureTime', () => {
  test('returns the future time based on the given minutes', () => {
    const futureTime = getFutureTime(10);
    const expectedTime = Date.now() + 10 * 60000; // Adding 10 minutes in milliseconds
    expect(futureTime.getTime()).toBeCloseTo(expectedTime, -2); // Check if the returned value is close to the expected future time
  });
});

describe('answerFormat', () => {
  test('returns the correct message for a correct answer', () => {
    const answerProps = { answer: 'Option A', selected: 'Option A' };
    const message = answerFormat(answerProps, true);
    expect(message).toBe('You answered Option A and correct, you have improved the chance to save the world!');
  });

  test('returns the correct message for an unanswered question', () => {
    const answerProps = { answer: 'Option A', selected: '' };
    const message = answerFormat(answerProps, false);
    expect(message).toBe('You didn\'t answer this question, you have to be faster to save the world!');
  });

  test('returns the correct message for an incorrect answer', () => {
    const answerProps = { answer: 'Option A', selected: 'Option B' };
    const message = answerFormat(answerProps, false);
    expect(message).toBe('You answered Option B and the correct answer is Option A but don\'t worry! Heroes never give up!');
  });
});

