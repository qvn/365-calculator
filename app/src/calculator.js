'use strict'

RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

function getDelimiter(header) {
    // return array of delimiter(s) found in header
    let singleDelimiter = String(header).match(/(?<=^\/\/)(.)(?=\n)/); // parse //{delimiter}\n{numbers}

    let manyDelimiter = String(header).match(/(?<=\[)(.*?)(?=\])/g); // parse //[{delimiter}][...]\n{numbers}

    return singleDelimiter || manyDelimiter;
}

function calculate(expression) {

    let negatives = [];

    const header = expression.substring(0, expression.indexOf('\n'));

    const specialDelimiter = getDelimiter(header + '\n');

    const delimiters = specialDelimiter ? [...specialDelimiter, '\n'] : ['\n'];

    for (let delimiter of delimiters) {
        expression = expression.replace(new RegExp(RegExp.escape(delimiter), "g"), ',');
    };

    const total = expression
                .split(',')
                .map(item => parseFloat(item))
                .filter(item => !isNaN(item))
                .map(item => {
                    if (item > 0) {
                        return item;
                    } else {
                        negatives.push(item);
                    } 
                })
                .filter(item => item <= 1000)
                .reduce((acc, item) => (acc + item), 0);
    

    if (negatives.length > 0) {
        throw new Error('Negative numbers found in input: ' + String(negatives) + '. Negatives are not allowed.')
    }
        
    return total;
}

module.exports = {calculate, getDelimiter};