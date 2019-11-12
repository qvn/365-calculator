'use strict'

function calculate(expression) {
    let result = String(expression).split(/[,\n]/);
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