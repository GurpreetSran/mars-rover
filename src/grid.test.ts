import { Grid as SquareGrid } from './Grid';

const grid = new SquareGrid(5, 5);

test('Grid', () => {
  expect(grid.x).toBe(5);
  expect(grid.x).toBe(5);
});
