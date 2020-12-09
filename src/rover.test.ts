import { Rover } from './Rover';
import { Orientation } from './types';

const config = {
  position: {
    x: 2,
    y: 1,
  },
  orientation: 'N' as Orientation,
};

const rover = new Rover(config);

test('Rover Initialisation', () => {
  expect(rover.orientation).toBe('N');
  expect(rover.position.x).toBe(2);
  expect(rover.position.y).toBe(1);
});

// All other instructions can be tested here
test('Rover Move', () => {
  rover.move('R');
  expect(rover.orientation).toBe('E');
});
