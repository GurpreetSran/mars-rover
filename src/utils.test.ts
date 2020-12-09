import { parseInput } from './utils';

test('ParseInput', () => {
  const parsedInput = parseInput('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM');

  expect(parsedInput.grid.x).toBe(5);
  expect(parsedInput.grid.y).toBe(5);
  expect(parsedInput.commands.length).toBe(2);
  expect(parsedInput.rovers.length).toBe(2);
});
