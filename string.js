const stringLength = string => string.length;

const stringLengthRange = string => {
    if(string.length > 0 && string.length < 10) {
        return true;
    } else {
        throw new TypeError("String not in range");
    }
};

const stringReverse = string => string.split('').reverse().join('');

const capitalizeString = string => {
    let first = string.split('').splice(0,1).join('').toUpperCase();
    let str = string.slice(1, string.length);
    let final = first+str;
    return final;
};

module.exports = { stringLength, stringLengthRange, stringReverse, capitalizeString };