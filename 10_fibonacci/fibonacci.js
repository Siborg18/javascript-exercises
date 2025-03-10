const fibonacci = function(nthFib) {
    let a = 0;
    let b = 1;
    let x = 0;
    let numberOfLoops = 1;

    if (nthFib == 0) {
        return 0;
    };

    if (nthFib < 0) {
        return "OOPS";
    };

    if(typeof(nthFib) == "string") {
        nthFib = Number(nthFib);
        console.log("Current type of fib: ", typeof(nthFib));
    }

    function getTotal(a, b) {
        return a + b;
    }

    if(nthFib == 1) {
        return getTotal(a, b)
    }
    else {
        while (numberOfLoops < nthFib) {
            numberOfLoops += 1;
            console.log("Looped", numberOfLoops, " of times");
            console.log("Fibonacci", getTotal(a, b));
            x = getTotal(a, b);
            a = b;
            b = x;
            }; 
            return x;
    }
   
};

// Do not edit below this line
module.exports = fibonacci;
