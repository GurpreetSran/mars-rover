import { IRover, Instructions } from './types';
import { coordinates } from './utils';

export class Rover implements IRover {
  position;
  orientation;

  constructor(config: IRover) {
    this.orientation = config.orientation;
    this.position = config.position;
  }

  public move(instruction: Instructions): void {
    if (instruction === 'L') {
      this.orientation = coordinates[this.orientation]['L']();
    }
    if (instruction === 'R') {
      this.orientation = coordinates[this.orientation]['R']();
    }
    if (instruction === 'M') {
      this.position = coordinates[this.orientation]['move'](
        this.position.x,
        this.position.y
      );
    }
  }
}
