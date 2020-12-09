import { execute } from './index';

test('Execute', () => {
  expect(execute('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM')).toBe(
    '1 3 N\n5 1 E\n'
  );
});
