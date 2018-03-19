import Timer from './Timer'

export default class Break extends Timer {
  constructor() {
    // Initialize Timer with 5 minute interval
    super(5 * 60);
  }
}