import { IGrid } from './types';

export class Grid implements IGrid {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
