import leftPad from './../util/leftPad'

export default class Timer {
  constructor(maxSeconds) {
    this.maxSeconds = maxSeconds;
    this.elapsedSeconds = 0;
    this.complete = false;
    this._counter = null;
  }
  get formattedElapsedTime() {
    let minutes = leftPad(this.elapsedMinutes.toString(), 2, '0');
    let seconds = leftPad((this.elapsedSeconds % 60).toString(), 2, '0');

    return `${minutes}:${seconds}`
  }
  get elapsedMinutes() {
    return Math.floor(this.elapsedSeconds / 60);
  }
  start() {
    this.interval = setInterval(count.bind(this), 1000);

    function count() {
      this.elapsedSeconds += 1;
      console.log(this.formattedElapsedTime);
      if (this.elapsedSeconds >= this.maxSeconds) {
        this.stop();
        this._alertComplete();
      }
    }
  }
  stop() {
    clearInterval(this.interval);
  }
  _alertComplete() {
    this.complete = true;
    console.log('Complete');
  }
}