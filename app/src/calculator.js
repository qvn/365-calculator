'use strict'

const MAXINPUT = 2;

function calculate(expression) {
    let result = String(expression).split(',');
    

    if (result.length > MAXINPUT) {
        throw "Only Max of 2 numbers allowed";
    }

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