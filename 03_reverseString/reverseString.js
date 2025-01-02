const reverseString = function(string) {
    /* Turn into arry */
    let stringArray = string.split("");
    /*Reverse array*/
    stringArray = stringArray.reverse();
    /*Joins Return statement*/
    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
