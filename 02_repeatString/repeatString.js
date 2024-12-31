const repeatString = function(string, timesRepeat) {
    let outputString ="";
    if (timesRepeat < 0){
        return "ERROR"
    }
    for (let i = 0; i < timesRepeat; i++){
        outputString += string;
    }
    return (outputString);
};

// Do not edit below this line
module.exports = repeatString;
