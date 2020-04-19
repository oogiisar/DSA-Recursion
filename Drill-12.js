function binary(num) {
  if (num === 0) {
      return '0';
  }
  const dividedNum = Math.floor(num/2);
  const remainder = num % 2;
  if (dividedNum === 0) {
      return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
};

console.log(binary(1000));

/*1   1   1   1   1   0   1   0   0   0
512 256 128 64  32  16  8   4   2   1

101
5*/