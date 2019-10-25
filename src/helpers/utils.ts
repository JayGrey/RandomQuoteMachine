
const estimateEncodedStringSize = (str: string): number =>
  str
    .split("")
    .map(c => encodeURI(c).length)
    .reduce((a, b) => a + b, 0);

export const formTweetURL = (base: string, tail: string): string => {
  const URLLengthLimit = 2000;

  const offset = base.length + estimateEncodedStringSize(tail) - URLLengthLimit;

  return offset > 0
    ? base + encodeURI(tail.substr(0, tail.length - offset))
    : base + encodeURI(tail);
};
