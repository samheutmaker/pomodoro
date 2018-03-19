import leftPad from './../util/leftPad'

export function formatElapsedTime(timer) {
  let minutes = leftPad(getElapsedMinutes(timer).toString(), 2, '0');
  let seconds = leftPad((timer.elapsedSeconds % 60).toString(), 2, '0');
  return `${minutes}:${seconds}`
}

export function getElapsedMinutes(timer){
  return Math.floor(timer.elapsedSeconds / 60)
}