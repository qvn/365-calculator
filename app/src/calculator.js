'use strict'
function getDelimiter(expression) {
    let defaultDelimiter = new RegExp(/[,\n]/);

    let specialDelimiter = String(expression).match(/(^\/\/.\n)/); //look for combination '//{delimiter}\n'

    if (specialDelimiter) {
        return new RegExp(specialDelimiter[0][2]);
    } else {
        return defaultDelimiter
    }
}
function calculate(expression) {

    let result = String(expression).split(getDelimiter(expression));

    let negatives = result.filter(num =>  num < 0);

    if (negatives.length > 0) {
        throw new Error('Negative numbers found in input: ' + String(negatives) + '. Negatives are not allowed.')
    }

    let total = 0;
    
    for (let i = 0; i < result.length; i++) {
        let num = parseFloat(result[i]);
        if (!isNaN(num)  && num <= 1000) {
            total += num;
        }
    }
    return total;
}

module.exports = calculate;