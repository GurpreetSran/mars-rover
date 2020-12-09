import { Orientation } from './types';

export const coordinates = {
  N: {
    L: (): Orientation => 'W',
    R: (): Orientation => 'E',
    move: (x: number, y: number) => {
      return { x: x, y: y + 1 };
    },
  },
  E: {
    L: (): Orientation => 'N',
    R: (): Orientation => 'S',
    move: (x: number, y: number) => {
      return { x: x + 1, y: y };
    },
  },
  S: {
    L: (): Orientation => 'E',
    R: (): Orientation => 'W',
    move: (x: number, y: number) => {
      return { x: x, y: y - 1 };
    },
  },
  W: {
    L: (): Orientation => 'S',
    R: (): Orientation => 'N',
    move: (x: number, y: number) => {
      return { x: x - 1, y: y };
    },
  },
};

export const parseInput = (input: string) => {
  const commands: string[] = [];
  const roversInput: string[] = [];

  const splitInputGrid = input.split('\n')[0].split(' ');

  const gridX = parseInt(splitInputGrid[0]);
  const gridY = parseInt(splitInputGrid[1]);

  const splitInput = input.split('\n');
  for (let i = 1; i < splitInput.length; i = i + 2) {
    roversInput.push(splitInput[i]);
    commands.push(splitInput[i + 1]);
  }

  const rovers = roversInput.map((rover) => {
    const split = rover.split(' ');
    return {
      x: Number(split[0]),
      y: Number(split[1]),
      orientation: split[2],
    };
  });
  return {
    grid: {
      x: gridX,
      y: gridY,
    },
    commands,
    rovers,
  };
};
