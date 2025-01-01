const removeFromArray = function(array, args) {
    /* Copy Array */
    let outputArray = array;
    /* Loop through optional input */
    for (let i = 0; i < args.length; i++){
        /* Remove entry based on argument (pop?) -> Ensure to Pop if equal -> either Loop (cheap version?) or use Javascript function -> forEach?*/
        outputArray = outputArray.filter(filterArray(item, args[i]));
    }   
    return outputArray
};
function filterArray(item, criteria){
    if (item != criteria){
        return item;
    }
}

// Do not edit below this line
module.exports = removeFromArray;
