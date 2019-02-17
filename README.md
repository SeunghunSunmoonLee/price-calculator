Pricing rules, variables have to be in one place since it can be edited often by non technical people, and to prevent errors. Therefore, there is a env.js file.

Further improvements that can be made:
implement dependency injection pattern for more complex calculations with several dependencies, extending functionalities. 
i.e)
```
function PriceModel (options) {
  var rebate;
  
  if (!options.rebate) {
    throw new Error('Options.rebate is required');
  }
  
  rebate = options.rebate;
  
  return {
    price: function (userInput) {
      // calculations
    },
    rebate: function (rebate) {
      // rebate
    },
    discount: function () {

    }
  }
}
 
module.exports = userModel;
var option = require('./option');

var priceModel = require('Price')({
  options: options
});
```
