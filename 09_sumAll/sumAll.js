const sumAll = function(integer1, integer2) {
if (integer1 < 0 || integer2 < 0)
    return "ERROR";
if (!Number.isInteger(integer1) || !Number.isInteger(integer2))
    return "ERROR";
let smallerInt = integer1 < integer2 ? integer1 : integer2;
let biggerInt = integer1 < integer2 ? integer2 : integer1;
let sum = 0;
while (smallerInt <= biggerInt){
    sum += smallerInt;
    smallerInt++;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
