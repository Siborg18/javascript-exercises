const reverseString = function(stringIn) {
    let stringOut = "";
    for (let i = stringIn.length - 1; i > -1; i--)
    {
        let currentChar = stringIn.charAt(i);
        stringOut = stringOut.concat(currentChar)
    } 
    return stringOut;    
};

// Do not edit below this line
module.exports = reverseString;
