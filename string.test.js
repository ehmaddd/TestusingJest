const { stringLength, stringLengthRange, stringReverse, capitalizeString } = require('./string');

const str = 'welcome';
const rev = str.split('').reverse().join('');

test(`length of string '${str}' is ${str.length}`, () => {
    expect(stringLength(str)).toBe(str.length);
  });

test(`0 < ${str}.length < 10`, () => {
    expect(stringLengthRange(str)).toBe(true);
});

test(`Reverse of ${str} is ${rev}`, () => {
    expect(stringReverse(str)).toBe(rev);
});

test('Capitalize string', () => {
    const size = str.length;

    const regex = /^[A-Za-z]+$/;
    expect(str).toMatch(regex);
    expect(size).toBeGreaterThan(0);

    let first = str.split('').splice(0,1).join('').toUpperCase();
    let string = str.slice(1, str.length);
    let final = first+string;
    expect(capitalizeString(str)).toBe(final);

});