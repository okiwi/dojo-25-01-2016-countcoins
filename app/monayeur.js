'use strict';
const _ = require('lodash');

const TYPES_DE_PIECES = [
  {valeur:10, nom:'dimes'},
  {valeur:5, nom:'nickels'},
  {valeur:1, nom:'pennies'}
];


module.exports = function(montantEnDollar) {
  var combinaisons = [];
  if (montantEnDollar === 0) {
    return combinaisons;
  }
  var cents = montantEnDollar * 100;

  let merde = extrait(TYPES_DE_PIECES[0], cents, {quarters:0});

  merde.forEach((tuple) => {
    let tempALaCon = extrait(TYPES_DE_PIECES[1], tuple.reste, tuple.combinaison);
    tempALaCon.forEach((tuple) => {
      let finalement = extraitLesPennies(tuple.reste, tuple.combinaison);
      combinaisons = combinaisons.concat(finalement.combinaison);
    });
  });
  return combinaisons;
};


function extrait(type, montant, combinaison) {
  let résultats = [];
  for(var coins = 0; coins <= parseInt(montant / type.valeur); coins++) {
    let reste = montant-(coins*type.valeur);
    let combi = {};
    combi[type.nom] = coins;
    résultats.push({reste:reste, combinaison: _.merge(combi, combinaison)});
  }
  return résultats;
}

function extraitLesPennies(montant, combinaison) {
  return {reste:0, combinaison: _.merge({pennies:montant}, combinaison)};
}
