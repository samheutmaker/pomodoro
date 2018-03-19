import Timer from './Timer'

export default class Work extends Timer {
  constructor(onTick) {
    // Initialize Timer with 25 minute interval
    super(60, onTick);
    this.type = 'Work';
  }
}