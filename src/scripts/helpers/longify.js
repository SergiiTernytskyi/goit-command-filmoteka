const timeout = 1000;

export function longify(value) {
  setTimeout(value, timeout);
}
