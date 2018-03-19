export default function leftPad(value, desiredLength, paddingValue = 0) {
  while (value.length < desiredLength) {
    value = paddingValue + value;
  }
  return value;
}