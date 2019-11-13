
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
    let result = [];

    const header = expression.substring(0, expression.indexOf('\n'));

    const specialDelimiter = getDelimiter(header + '\n');

    const delimiters = specialDelimiter ? [...specialDelimiter, '\n'] : ['\n'];

    for (let delimiter of delimiters) {
        expression = expression.replace(new RegExp(RegExp.escape(delimiter), "g"), ',');
    };


    for (let element of expression.split(',')) {
        switch (true) {
            case isNaN(Number(element)): // skip non number
                result.push(0);
                break;
            case Number(element) > 1000: // skip number larger than 1000
                result.push(0);
                break;
            default:
                result.push(Number(element)); 
                break;
        }
    }

    negatives = result.filter(item => item < 0);

    if (negatives.length > 0) {
        throw new Error('Negative numbers found in input: ' + String(negatives) + '. Negatives are not allowed.')
    }

    const total = result.reduce((acc, item) => (acc + item), 0);

    // console.log(result.join('+') + ' = ' + total);

    return total;
}
module.exports = {calculate, getDelimiter};