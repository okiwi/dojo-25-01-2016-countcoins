'use strict';
const _ = require('lodash');

const TYPES_DE_PIECES = [
  {valeur:25, nom:'quarters'},
  {valeur:10, nom:'dimes'},
  {valeur:5, nom:'nickels'},
  {valeur:1, nom:'pennies'}
];

module.exports = function(montantEnDollar) {
  if (montantEnDollar === 0) {
    return [];
  }
  const cents = montantEnDollar * 100;
  return _.map(
    _.reduce(TYPES_DE_PIECES, extrait, [{reste: cents, combinaison:{}}])
    , 'combinaison');
};


function extrait(tuples, type) {
  return _.flatMap(tuples, (tuple) => {
    if(type.nom === 'pennies') {
      return [{reste:0, combinaison: _.merge({pennies:tuple.reste}, tuple.combinaison)}];
    }
    return _.map(_.range(0, parseInt(tuple.reste / type.valeur)+1), (coins) => {
      let reste = tuple.reste-(coins*type.valeur);
      return {reste:reste, combinaison: _.merge({[type.nom]: coins}, tuple.combinaison)};
    });
  });
}
