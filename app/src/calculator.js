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

function parse(expression, additionalDelimiter = [], defaultDelimiter = ',') {
    // Replace all special delimiters and return a string with the specified default delimiter. 

    let delimiters = [',', '\n'];

    if (additionalDelimiter) delimiters = [...delimiters, ...additionalDelimiter]
    
    for (let delimiter of delimiters) {
        expression = expression.replace(new RegExp(RegExp.escape(delimiter), "g"), defaultDelimiter);
    };
  
    return expression;
    
}

function calculate(expression) {

    let negatives = [];
    let header = expression.substring(0, expression.indexOf('\n')) + '\n';
    let specialDelimiter = getDelimiter(header);

    let total = parse(expression, specialDelimiter)
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