export interface IRover {
  position: {
    x: number;
    y: number;
  };
  orientation: Orientation;
  move?: (Instructions: Instructions) => void;
}

export interface IGrid {
  x: number;
  y: number;
}

export type Orientation = 'N' | 'E' | 'S' | 'W';

export type Instructions = 'L' | 'R' | 'M';
