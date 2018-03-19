import Timer from './Timer'

export default class Break extends Timer {
  constructor(onTick) {
    // Initialize Timer with 5 minute interval
    super(30, onTick);
    this.type = 'Break';
  }
}