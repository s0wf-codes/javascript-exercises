const repeatString = function(str,num) {
    let repeatedString = "";
    if (num < 0)
        return "ERROR";
    for (i = 0 ; i < num ; i++)
        repeatedString = repeatedString + str;
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
