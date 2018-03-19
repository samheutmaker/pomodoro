export default class Promodoro {
  constructor(title) {
    this.title = title;
    this._currentRoundIndex = 0;
    this._hasLongBreak = true;
    this._rounds = [
      new Work(),
      new Break(),
      new Work(),
      new Break(),
      new Work(),
      new Break(),
      new Work(),
      new LongBreak(),
    ]; 
  }
  start(){
    this._rounds[this._currentRoundIndex].start()
    .then()
  }
  stop(){
    this._rounds[this._currentRoundIndex].stop();
  }
}