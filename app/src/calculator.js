'use strict'
function getSpecialDelimiter(header) {

    let singleSpecialDelimiterRegExp = /(?<=^\/\/)(.)(?=\n)/g; // parse //{delimiter}\n{numbers}

    let multipleSpecialDelimiterRegExp = /(?<=^\/\/\[)(.+)(?=\]\n)/g; // //[{delimiters}]\n{numbers}

    try {
        let delimiter = header.match(singleSpecialDelimiterRegExp) || header.match(multipleSpecialDelimiterRegExp);
        return delimiter[0];
    } catch (error) {
        if (error instanceof TypeError) {
            return undefined;
        } else {
            printError(error, false);
        }
    }
}
function calculate(expression) {
    let defaultDelimiter = /[,\n]/;
    
    let signature = '\n';

    let result;

    let marker = expression.indexOf(signature)

    let header = expression.substring(0, marker + signature.length);
    
    let specialDelimiter = getSpecialDelimiter(header);

    if (specialDelimiter) {
        result = expression.substring(marker + signature.length - 1).split(specialDelimiter);
    } else {
        result = expression.split(defaultDelimiter);
    }

    let negatives = result.filter(num =>  num < 0);

    if (negatives.length > 0) {
        throw new Error('Negative numbers found in input: ' + String(negatives) + '. Negatives are not allowed.')
    }

    let total = result
        .map(item => parseFloat(item))
        .filter(item => !isNaN(item) && item <= 1000)
        .reduce((acc, item) => (acc + item), 0);
        
    return total;
}
calculate('//#\n2#5')
module.exports = calculate;