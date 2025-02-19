const sumAll = function(min, max) {


    function sumNumbers (min, max) {
        let sum = 0;
        for (let i = min; i <= max; i ++)
            {
                sum += i;
            };
            console.log(typeof(sum));
        return sum;
    };

    if (max % 1 != 0 || min % 1 != 0)
    {
        return "ERROR";
    }

    if (typeof(min) != "number" || typeof(max) != "number") {
        return "ERROR";
    }

    else if(min < 0 || max < 0) {
        return "ERROR";
    }
    else if(min > max) {
        return sumNumbers(max, min); // flipped parameters to account for the first number being greater
    }

    else {
        return sumNumbers(min, max);
    };
};

// Do not edit below this line
module.exports = sumAll;
