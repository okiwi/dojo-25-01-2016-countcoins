module.exports = function(montantEnDollar) {
  var combinaisons = [];
  if (montantEnDollar === 0) {
    return combinaisons;
  }
  var cents = montantEnDollar * 100;
  for(var dimes = 0; dimes <= parseInt(cents / 10); dimes++) {
    var reste = cents - (10*dimes);
    for(var nickels = 0; nickels <= parseInt(reste / 5); nickels++) {
      combinaisons.push(
        {quarters: 0, dimes: dimes, nickels: nickels, pennies:reste-(nickels*5)}
      );
    }
  }
  return combinaisons;
};
