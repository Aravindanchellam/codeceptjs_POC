var data = require('./data.json')
Feature('Site');

// Scenario('Sign up with empty Inputs ', (I) => {
//     I.amOnPage(data['URL'])
//     I.click(data['sign up'])
//     I.click(data['submit'])
//     I.seeElement(data['form']['element'])
//     I.say('Sign up Error')        
// });

// // Scenario('sign up with invalid inputs', (I) =>{
// //     I.amOnPage(data['URL'])
// //     I.click(data['sign up'])
// //     I.fillField(data['form']['firstname'],data['userdata']['name'])
// //     I.fillField(data['form']['lastname'],data['userdata']['lsname'])
// //     I.fillField(data['form']['email'],data['userdata']['mail'])
// //     I.fillField(data['form']['mobile'],data['userdata']['mobno'])
// //     I.fillField(data['form']['password'],data['userdata']['password'])
// //     I.fillField(data['form']['cpassword'],data['userdata']['cpassword'])
// //     I.click(data['submit'])
// //     I.wait(2)    
// //     I.seeElement('//a[@id=\'aUserName\']')

// // });

// Scenario('Login with valid inputs', (I) => {
//     I.amOnPage(data['URL'])
//     I.click(data['login_input_1']['login'])
//     I.fillField(data['login_input_1']['fillname'],data['login_input_1']['username'])
//     I.fillField(data['login_input_1']['paswdfill'],data['login_input_1']['password'])
//     I.click(data['login_input_1']['submit'])
//     I.click(data['login_input_1']['submit'])
//     I.wait(2)
//     I.selectOption('//a[@id=\'aUserName\']')
//     I.say('Login Successful with vaild inputs')       
// });

// Scenario("Login with invalid inputs",(I) => {
//     I.amOnPage(data['URL'])
//     I.click(data['login_input_2']['login'])
//     I.fillField(data['login_input_2']['fillname'],data['login_input_2']['username'])
//     I.fillField(data['login_input_2']['paswdfill'],data['login_input_2']['password'])
//     I.click(data['login_input_2']['submit'])
//     I.click(data['login_input_2']['submit'])
//     I.wait(2)
//     I.selectOption('//a[@id=\'aUserName\']')
//     I.say('Login UnSuccessful with invaild inputs')
// });

Scenario('Order_1', (I) => {
    I.amOnPage(data['URL'])
    I.click(data['product_selection']['lock'])
    I.fillField(data['product_selection']['search'],data['product_selection']['Searchitem'])
    I.click(data['product_selection']['searchbtn'])
    I.click(data['product_selection']['product_1'])
    I.wait(1)
    I.fillField(data['product_selection']['fillpin'],data['product_selection']['pincode'])
    I.click(data['product_selection']['pincheck'])
    I.click(data['product_selection']['Addtocart'])    
    I.click(data['product_selection']['Checkcart'])
    I.wait(2)
});