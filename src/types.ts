export interface IRover {
  position: {
    x: number;
    y: number;
  };
  orientation: Orientation;
}

export interface IGrid {
  x: number;
  y: number;
}

export type Orientation = 'N' | 'E' | 'S' | 'W';

export type Instructions = 'L' | 'R' | 'M';
