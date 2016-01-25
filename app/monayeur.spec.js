var expect = require('chai').expect;
describe('monayeur', function() {

  var rendLaMonnaie = require('./monayeur.js');

  it('donne les combinaisons pour 0 dollar', function() {
      var combinaisons = rendLaMonnaie(0);

      expect(combinaisons).to.have.length(0);
  });

  it('donne les combinaisons pour 1 penny', function() {
      var combinaisons = rendLaMonnaie(0.01);

      expect(combinaisons).to.have.length(1);
      expect(combinaisons[0]).to.deep.equal({quarters: 0, dimes: 0, nickels:0, pennies:1});
  });

  it('donne les combinaisons pour 2 pennies', function() {
      var combinaisons = rendLaMonnaie(0.02);

      expect(combinaisons).to.have.length(1);
      expect(combinaisons[0]).to.deep.equal({quarters: 0, dimes: 0, nickels:0, pennies:2});
  });

  it('donne les combinaisons pour 5 pennies', function() {
      var combinaisons = rendLaMonnaie(0.05);

      expect(combinaisons).to.have.length(2);
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:0, pennies:5});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:1, pennies:0});
  });

  it('donne les combinaisons pour 6 pennies', function() {
      var combinaisons = rendLaMonnaie(0.06);

      expect(combinaisons).to.have.length(2);
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:1, pennies:1});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:0, pennies:6});
  });

  it('donne les combinaisons pour 10 pennies', function() {
      var combinaisons = rendLaMonnaie(0.10);

      expect(combinaisons).to.have.length(4);
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 1, nickels:0, pennies:0});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:2, pennies:0});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:1, pennies:5});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:0, pennies:10});
  });


  it('donne les combinaisons pour 11 pennies', function() {
      var combinaisons = rendLaMonnaie(0.11);

      expect(combinaisons).to.have.length(4);
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:1, pennies:6});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:2, pennies:1});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 0, nickels:0, pennies:11});
      expect(combinaisons).to.deep.contain({quarters: 0, dimes: 1, nickels:0, pennies:1});
  });

});
