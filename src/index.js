module.exports = function toReadable(number) {
  const ONES = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const range1to19 = n => ONES[Number(n)];
  const range20to90 = n => TENS[n[0]] + ' ' + ONES[n[1]];

  const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;

  function numWords(input) {
    let num = Number(input);
    let res = '';
    if (num === 0) return 'zero';

    const numStr = num.toString();
    const [, n1, n2, n3, n4, n5] = ('000000000' + numStr)
      .substr(-9)
      .match(regex);

    res += n1 != 0 ? (range1to19(n1) || range20to90(n1)) + ' crore ' : '';
    res += n2 != 0 ? (range1to19(n2) || range20to90(n2)) + ' lakh ' : '';
    res += n3 != 0 ? (range1to19(n3) || range20to90(n3)) + ' thousand ' : '';
    res += n4 != 0 ? range1to19(n4) + ' hundred ' : '';
    res += n5 != 0 && res != '' ? '' : '';
    res += n5 != 0 ? range1to19(n5) || range20to90(n5) : '';

    return res.trim();
  }

  return numWords(number);
};
