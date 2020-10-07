const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function splitByTen(text) { // делит строку в массив по 10 символов
    return text.match(/........../g) || [];
}
function splitByTwo(text) { // делит строку в массив по 2 символов
    return text.match(/../g);
}
function toBinaryArr(text) { // преобразует в массив двоичных пар(точки и тире)
    return splitByTwo(text).filter(element => element !== '00')
}

function toMorseChar(binaryArr) { // преобразует в символ морзе
    return binaryArr.reduce((acc, symbol) => {
        acc += (symbol === '11') ? '-' : '.'       // ['-', '-'] ['.']
        return acc
     }, '')       
}

function decode(expr) {
    // write your solution here     "00000011110000000010"
    const charArr = splitByTen(expr) // ['0000001111', '0000000010']
    return charArr.reduce((newChar, binaryChar) => {
        if (binaryChar === "**********") return newChar + ' '
        const binaryArr = toBinaryArr(binaryChar)    // ['11', '11'] ['10']
        const morseChar = toMorseChar(binaryArr)    // "--" "."
        return newChar + MORSE_TABLE[morseChar]             // 'me'
    },'');

}

module.exports = {
    decode
}

