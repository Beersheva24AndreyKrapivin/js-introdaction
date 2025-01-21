const zeroCode = "0".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const nineCode = "9".charCodeAt(0);
const MIN_CODE = 32;
const MAX_CODE = 126;
const N_CODES = MAX_CODE - MIN_CODE + 1;
export function myParseIntRadix(strNum, radix) {
    //TODO
    //converting from sting to number taking in consideration
    //different number systems
    //radix is number of digits in the number system
    //radix is any number from 2 to 36 (0123456789... <all letters>)
    //if radix is undefined the digital number system is implied
    //examples: myParseIntRadix("10", 10) -> 10
    //myParseIntRadix("f", 36) -> 15
    //myParseIntRadix("z", 36) -> 35
    //myParseIntRadix("3", 2) -> NaN
    //myParseIntRadix("10103", 2) -> 10
    let res = NaN;
    let sign = 1;
    let actualRadix = getActualRadix(radix);
    if (strNum != null && strNum != undefined && !isNaN(actualRadix)) {
        let index = 0;
        strNum = strNum.toString().trim().toLowerCase();
        ({ index, sign } = signProcessing(strNum, index, sign));
        res = convertProcessing(index, strNum, res, radix);

    }

    return res * sign;
}

export function myParseInt(strNum) {
    return myParseIntRadix(strNum, 10);
}
function convertProcessing(index, strNum, res, radix) {
    if (index < strNum.length && !isNaN(getDigit(strNum[index], radix))) {
        res = 0;
        let running = true;
        while (index < strNum.length && running) {
            let digit = getDigit(strNum[index], radix);
            if (isNaN(digit)) {
                running = false;
            } else {
                res = res * radix + digit;
                index++;
            }
        }
    }
    return res;
}

function signProcessing(strNum, index, sign) {
    if (strNum[0] == '-') {
        index++;
        sign = -1;
    } else if (strNum[0] == '+') {
        index++;
    }
    return { index, sign };
}

function getDigit(digitStr, radix) {
    const code = digitStr.charCodeAt(0);
    const base = code > nineCode ? aCode - 10 : zeroCode;
    const res = code - base;
    return res > -1 && res < radix ? res : NaN;
}

export function myToStringFromIntNumber(number) {
    //TODO returns sting presentation of the given number
    //if number has type of string the string should contain 
    //      a number matching the parsInt syntax
    // examples:
    //myToStringFromIntNumber(12.35) -> returns "12"
    //myToStringFromIntNumber("12.35") -> returns "12"
    //myToStringFromIntNumber() -> returns ""
    //myToStringFromIntNumber(-12) -> returns "-12"
    //myToStringFromIntNumber("+12") -> returns "12"
    //myToStringFromIntNumber(+12) -> returns "12"
    //myToStringFromIntNumber("a1") -> returns ""
    //myToStringFromIntNumber("1a") -> returns "1"
    //Disallowed the following operations:
    //toString() using
    //constructor String
    //operator + with empty string like "" + 
    let res = "";
    let sign = "";
    const temp = "0123456789";
    let numPars = myParseInt(number);
    if (!isNaN(numPars)) {
        if (numPars < 0) {
            sign = "-";
            numPars = -numPars;
        }
        while (numPars > 0) {
            let digit = numPars % 10;
            numPars = Math.floor(numPars / 10);
            res = temp[digit] + res;
        }
    }
    return sign + res;
}

function getActualRadix(radix) {
    let actualRadix = 10;
    if (radix !== undefined) {
        actualRadix = radix > 1 && radix < 37 ? radix : NaN;
    }
    return actualRadix
}

//Printed ASCII table codes are from 32 (Space) to 126 (~)
export function stringShift(str, shift) {
    //TODO character code inside string is increased on the shift
    //value 'd' shifted on 3 will result character 'd'
    //'9' shift on 2 will result ';'
    //if shifting causes exiting out of printable ASCII character
    //there will be cycling from the begining
    //if the 'shift' is a negative number o not a number the given
    //string should be returned with no updating
    //stringShift("Hello", 3) -> "Khoor"
    //stringShift("~Z4", 3) -> '"]7'
    //return shiftAndUnshift(shift, str, true);
    return shiftUnshift(str, shift, true);
}

function getActualShift(code, shift, isShift) {
    const actualShift = isShift ? code - MIN_CODE : MAX_CODE - code;
    return (actualShift + shift) % N_CODES;
}

function shiftUnshiftOneChar(code, shift, isShift) {
    const actualShift = getActualShift(code, shift, isShift);
    const codeResult = isShift ? MIN_CODE + actualShift : MAX_CODE - actualShift;
    return String.fromCharCode(codeResult);
}

function shiftUnshift(str, shift, isShift) {
    let res = str;
    shift = parseInt(shift);
    if (str != undefined && shift > 0) {
        str = str.toString();
        res = '';
        for (let i = 0; i < str.length; i++) {
            res += shiftUnshiftOneChar(str.charCodeAt(i), shift, isShift);
        }
    }
    return res;
}

function isValidShift(shift) {
    const shiftNum = parseInt(shift);
    return shiftNum > 0;
}

function shiftAndUnshift(shift, str, isShift) {
    let res = "";
    if (shift !== undefined && !isNaN(shift) && shift >= 0) {
        const effectiveShift = shift % 95;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code >= 32 && code <= 126) {
                let newCode;
                if (isShift) {
                    newCode = code + effectiveShift;
                    if (newCode > 126) {
                        newCode = 32 + (newCode - 127);
                    }
                } else {
                    newCode = code - effectiveShift;
                    if (newCode < 32) {
                        newCode = 126 - (31 - newCode);
                    }
                }
                res += String.fromCharCode(newCode);
            }
        }
    } else {
        res = str;
    }
    return res;
}

export function stringUnshift(str, shift) {
    //TODO character code inside string is increased on the unshift
    //value 'd' unshifted on 3 will result character 'a'
    //';' unshift on 2 will result '9'
    //if shifting causes exiting out of printable ASCII character
    //there will be cycling from the end
    //if the 'unshift' is a negative number o not a number the given
    //string should be returned with no updating
    //stringUnshift("Khoor", 3) -> "Hello"
    //stringUnshift(""]7", 3) -> "~Z4"
    //return shiftAndUnshift(shift, str, false);
    return shiftUnshift(str, shift, false);
}