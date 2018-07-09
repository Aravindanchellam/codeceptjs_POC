'use strict';

// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    Login: function(data){
      this.amOnPage(data['URL'])
      this.click(data['login_input_1']['login'])
      this.fillField(data['login_input_1']['fillname'], data['login_input_1']['username'])
      this.fillField(data['login_input_1']['paswdfill'],data['login_input_1']['password'])
      this.click(data['login_input_1']['submit'])
    }   
  });
}
