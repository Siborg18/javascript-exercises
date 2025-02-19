const repeatString = function(stringIn, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return 'ERROR';
    }
    let stringOut = "";
    for (let i = 0; i < numberOfRepeats; i++)
    {
        stringOut = stringOut.concat(stringIn);
    }
    return stringOut;
};

// Do not edit below this line
module.exports = repeatString;
