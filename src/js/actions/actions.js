import Pomodoro from './../models/Pomodoro'

export function initialState(){
  return {
    pomodoros: []
  };
}

export function createNewPomodoro(title) {
  let pomodoros = this.state.pomodoros.slice(0);
  pomodoros.push(new Pomodoro(title));
  return this.setStateAsync({ pomodoros });
}