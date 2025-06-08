const removeFromArray = function(arr, ...numbersToRemove) {
    return arr.filter(item => !numbersToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
