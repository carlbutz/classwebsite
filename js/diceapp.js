'use strict';

var validDice = false;

while(!validDice){
    var diceType = prompt('What type of dice would you like to order? (2, 4, 6, 8, 10, 12, 20, 100)')
    validDice = checkDice(diceType);
}
var validQty = false;

while(!validQty){
    var orderQty = prompt('How many dice would you like to purchase?');
    validQty = checkQty(orderQty);
}

var purchase = checkPurcase(diceType);
var totalPrice = 0;
document.write('You purchased the following: <br>')
for(var i=1; i<=orderQty; i++){
    document.write('Item #: ' + i +' >> ' + purchase[0] + ' for $' + purchase[1].toFixed(2) + '<br>');
    totalPrice += purchase[1]
};
document.write('Your total price is ' + totalPrice.toFixed(2));

function checkDice(diceType){
    if(diceType == 2 || diceType == 4 || diceType == 6 || diceType == 8 || diceType == 10 || diceType == 12 || diceType == 20 || diceType == 100){
        var isValid = true;
    } else {
        var isValid = false;
    }
    return isValid
};

function checkQty(orderQty){
    if(orderQty > 0){
        var orderOK = true;
    } else {
        var orderOK = false;
        confirm('You must order 1 or more items');
    }
    return orderOK;
}

function checkPurcase(diceType){
    if(diceType == 2){
        var diceString = '2-sided dice';
        var dicePrice = 0.25;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 4){
        var diceString = '4-sided dice';
        var dicePrice = 0.50;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 6){
        var diceString = '6-sided dice';
        var dicePrice = 0.75;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 8){
        var diceString = '8-sided dice';
        var dicePrice = 1.00;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 10){
        var diceString = '10-sided dice';
        var dicePrice = 1.25;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 12){
        var diceString = '12-sided dice';
        var dicePrice = 1.50;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 20){
        var diceString = '20-sided dice';
        var dicePrice = 1.75;
        var whatPurchased = [diceString, dicePrice]
    } else if(diceType == 100){
        var diceString = 'percentile dice';
        var dicePrice = 2.00;
        var whatPurchased = [diceString, dicePrice]
    } ;
    return whatPurchased;
}