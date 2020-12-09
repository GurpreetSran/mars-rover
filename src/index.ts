import { Grid } from './Grid';
import { Rover } from './Rover';
import { Orientation } from './types';
import { parseInput } from './utils';

export const execute = (input: string): string => {
  const { grid: gridData, commands, rovers } = parseInput(input);
  const grid = new Grid(gridData.x, gridData.y);

  const finalPositions: Rover[] = [];

  for (let i = 0; i < commands.length; i++) {
    const rover = new Rover({
      position: { x: rovers[i].x, y: rovers[i].y },
      orientation: rovers[i].orientation as Orientation,
    });
    const command = commands[i];
    for (const char of command) {
      if (char === 'L') {
        rover.move(char);
      }
      if (char === 'R') {
        rover.move(char);
      }
      if (char === 'M') {
        rover.move(char);
      }
    }
    finalPositions.push(rover);
  }

  let result = '';

  finalPositions.forEach((finalPosition) => {
    result += `${finalPosition.position.x} ${finalPosition.position.y} ${finalPosition.orientation}\n`;
  });

  return result;
};

console.log(execute('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'));
