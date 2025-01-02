const sumAll = function(input1, input2) {
    if (!Number.isInteger(input1)|| input1 < 0 || input2 < 0 || !Number.isInteger(input2)){
        return "ERROR"
    }
    let start;
    let stop;
    if (input1 > input2){
        start = input2;
        stop = input1;
    } else{
        start = input1;
        stop = input2;
    }

    let result = 0;
    for (let i = start; i <= stop; i++){
        result += i;
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
