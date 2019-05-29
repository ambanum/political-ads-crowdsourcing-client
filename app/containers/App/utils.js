const NON_BREAKING_SPACE_UNICODE = '\u00a0';

export function numberWithSpaces(number) {
  if (!number) {
    return '';
  }
  return number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, NON_BREAKING_SPACE_UNICODE);
}
