import Timer from './Timer'

export default class LongBreak extends Timer {
  constructor(onTick) {
    // Initialize Timer with 25 minute interval
    super(25 * 60, onTick);
    this.type = 'Long Break';
  }
}