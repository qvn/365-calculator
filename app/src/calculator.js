'use strict'

function calculate(expression) {
    let result = String(expression).split(',');

    let total = 0;
    
    for (let i = 0; i < result.length; i++) {
        let num = parseFloat(result[i]);
        if (!isNaN(num)) {
            total += num;
        }
    }
    return total;
}

module.exports = calculate;