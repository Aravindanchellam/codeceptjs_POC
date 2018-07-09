var data = require('./data.json')
var inputs = require('./inputs.json')
Feature('Site');

Before((I) => { // or Background
    I.amOnPage(data['URL'])
});

Scenario('login with valid username and password', (I) => {
    // I.amOnPage(inputs['URL'])
    I.click(inputs['xpath']['login_button'])
    I.fillField(inputs['xpath']['email_add'],inputs['credentials']['username'])
    I.fillField(inputs['xpath']['password_x'],inputs['credentials']['password'])
    I.click(inputs['xpath']['login_into'])
    I.wait(2)
    I.click(inputs['xpath']['logout'])
    I.wait(2)
});

Scenario('Try to create new account with existing details', (I) => {
    // I.amOnPage(inputs['URL'])
    I.click(inputs['xpath']['signup'])
    I.wait(1)
    I.fillField(inputs['xpath']['firstname'],inputs['credentials']['firstname'])
    I.wait(1)
    I.fillField(inputs['xpath']['lastname'],inputs['credentials']['lastname'])
    I.wait(1)
    I.fillField(inputs['xpath']['Email'],inputs['credentials']['email_id'])
    I.wait(1)
    I.fillField(inputs['xpath']['phone_number'],inputs['credentials']['phone_no'])
    I.wait(1)
    I.fillField(inputs['xpath']['newpassword'],inputs['credentials']['new_password'])
    I.fillField(inputs['xpath']['repeat_pwd'],inputs['credentials']['new_password'])
    I.wait(1)
    I.click(inputs['xpath']['create_button'])
    I.wait(1)
    I.see('Email Id already Exist')
    I.say('scenario pass')
});

Scenario('check whether all fields in signup page should be mandatory or not?', (I) => {
    // I.amOnPage(inputs['URL'])
    I.click(inputs['xpath']['signup'])
    I.wait(1)
    I.fillField(inputs['xpath']['lastname'],inputs['credentials']['lastname'])
    I.fillField(inputs['xpath']['Email'],inputs['credentials']['email_id'])
    I.fillField(inputs['xpath']['phone_number'],inputs['credentials']['phone_no'])
    I.fillField(inputs['xpath']['newpassword'],inputs['credentials']['new_password'])
    I.fillField(inputs['xpath']['repeat_pwd'],inputs['credentials']['new_password'])
    I.wait(1)
    I.click(inputs['xpath']['create_button'])
    I.wait(1)
    I.seeElement(inputs['error']['mandatory_firstname'])
    I.say('First name-manadatory check-scenario pass')
    I.wait(1)
    I.fillField(inputs['xpath']['firstname'],inputs['credentials']['firstname'])
    I.wait(1)
    I.clearField(inputs['xpath']['lastname'],inputs['credentials']['lastname'])
    I.wait(1)
    I.click(inputs['xpath']['create_button'])
    I.seeElement(inputs['error']['mandatory_secondname'])
    I.say('lastname-manadatory check-scenario pass')
    I.wait(1)
    I.clearField(inputs['xpath']['Email'],inputs['credentials']['email_id'])
    I.fillField(inputs['xpath']['lastname'],inputs['credentials']['lastname'])
    I.wait(1)
    I.click(inputs['xpath']['create_button'])
    I.seeElement(inputs['error']['mandatory_email'])
    I.say('emailid-manadatory check-scenario pass')
    I.wait(1)
    I.clearField(inputs['xpath']['phone_number'],inputs['credentials']['phone_no'])
    I.fillField(inputs['xpath']['Email'],inputs['credentials']['email_id'])
    I.wait(1)
    I.click(inputs['xpath']['create_button'])
    I.seeElement(inputs['error']['mandatory_phone'])
    I.say('phoneno-manadatory check-scenario pass')
    I.wait(1)
});

Scenario('Test Login', (I) => {
    // I.Login(data)    
});

Scenario('Test Login using within function', (I) => {
    I.click(data['login_input_1']['login'])
    within('.dvcenter', () =>{
        I.fillField('ctl00$ContentPlaceHolder1$txtEmail', 'daisy.p@paripoorna.in')
        I.fillField('ctl00$ContentPlaceHolder1$txtPassword', 'Psss@123')
        I.wait(2)        
    });
    I.click(data['login_input_1']['submit'])
});

Scenario('Sign up with empty Inputs ', (I) => {
    // I.amOnPage(data['URL'])
    I.click(data['sign up'])
    I.click(data['submit'])
    I.seeElement(data['form']['element'])
    I.say('Sign up Error')        
});

Scenario('Sign up with empty Inputs  ', (I) => {
    // I.amOnPage(data['URL'])
    I.click(data['sign up'])
    I.click(data['submit'])
    I.retry({
        retries: 2,
        when: err => err.message === 'Sign up Error'
    }).seeElement(data['form']['element']);        
});

Scenario('sign up with invalid inputs', (I) =>{
    // I.amOnPage(data['URL'])
    I.click(data['sign up'])
    I.fillField(data['form']['username'],data['userdata']['name'])
    I.fillField(data['form']['lastname'],data['userdata']['lsname'])
    I.fillField(data['form']['email'],data['userdata']['mail'])
    I.fillField(data['form']['mobile'],data['userdata']['mobno'])
    I.fillField(data['form']['password'],data['userdata']['password'])
    I.fillField(data['form']['cpassword'],data['userdata']['cpassword'])
    I.click(data['submit'])
    I.wait(2)    
    // I.seeElement('//a[@id=\'aUserName\']')
});

Scenario('Login with valid inputs', (I) => {
    // I.amOnPage(data['URL'])
    I.click(data['login_input_1']['login'])
    I.fillField(data['login_input_1']['fillname'],data['login_input_1']['username'])
    I.fillField(data['login_input_1']['paswdfill'],data['login_input_1']['password'])
    I.click(data['login_input_1']['submit'])
    // I.click(data['login_input_1']['submit'])
    I.wait(2)
    // I.seeElement('//a[@id=\'aUserName\']')
    I.say('Login Successful with vaild inputs')       
});

Scenario("Login with invalid inputs",(I) => {
    // I.amOnPage(data['URL'])
    I.click(data['login_input_2']['login'])
    I.fillField(data['login_input_2']['fillname'],data['login_input_2']['username'])
    I.fillField(data['login_input_2']['paswdfill'],data['login_input_2']['password'])
    I.click(data['login_input_2']['submit'])
    I.click(data['login_input_2']['submit'])
    I.wait(2)
    // I.seeElement('//a[@id=\'aUserName\']')
    I.say('Login UnSuccessful with invaild inputs')
});

Scenario("Login with atleast one valid inputs",(I) => {
    // I.amOnPage(data['URL'])
    I.click(data['login_input_2']['login'])
    I.fillField(data['login_input_2']['fillname'],data['login_input_2']['username'])
    I.fillField(data['login_input_2']['paswdfill'],data['login_input_2']['password'])
    I.click(data['login_input_2']['submit'])
    I.click(data['login_input_2']['submit'])
    I.wait(2)
    // I.seeElement('//a[@id=\'aUserName\']')
    I.say('Login UnSuccessful with invaild inputs')
});

Scenario("Login with invalid inputs",(I) => {
    // I.amOnPage(data['URL'])
    I.click(data['login_input_2']['login'])
    I.fillField(data['login_input_2']['fillname'],data['login_input_2']['username'])
    I.fillField(data['login_input_2']['paswdfill'],data['login_input_2']['password'])
    I.click(data['login_input_2']['submit'])
    I.click(data['login_input_2']['submit'])
    I.wait(2)
    // I.seeElement('//a[@id=\'aUserName\']')
    I.say('Login UnSuccessful with invaild inputs')
});

Scenario('Order_1 with checkout', (I) => {
    // I.amOnPage(data['URL'])
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

Scenario('Order_2 with removing cart', (I) => {
    I.amOnPage(data['URL'])
    I.click(data['product_selection_1']['prduct_handle'])
    // I.fillField(data['product_selection_1']['search'],data['product_selection_1'][''])
    I.click(data['product_selection_1']['handle'])
    I.click(data['product_selection_1']['product_1'])
    I.wait(1)
    I.fillField(data['product_selection_1']['fillpin'],data['product_selection_1']['pincode'])
    I.click(data['product_selection_1']['pincheck'])
    I.click(data['product_selection_1']['Addtocart'])    
    I.click(data['product_selection_1']['Checkcart'])
    I.wait(2)
    I.click(data['product_selection_1']['remove'])
    I.wait(5)
    I.amOnPage(data['URL']) 
    I.wait(5)
});

Scenario('Proceeding to check out using cart', (I) => {
    // I.amOnPage(data['URL'])
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
    I.amOnPage(data['URL'])
    I.wait(2)
    I.click(data['product_selection_1']['prduct_handle'])
    // I.fillField(data['product_selection_1']['search'],data['product_selection_1'][''])
    I.click(data['product_selection_1']['handle'])
    I.click(data['product_selection_1']['product_1'])
    I.wait(1)
    I.fillField(data['product_selection_1']['fillpin'],data['product_selection_1']['pincode'])
    I.click(data['product_selection_1']['pincheck'])
    I.click(data['product_selection_1']['Addtocart'])
    I.wait(2)    
    I.click(data['product_selection_1']['Checkcart'])
    // I.wait(2)
    // I.click(data['product_selection_1']['remove'])
    I.wait(5)
    // I.amOnPage(data['URL'])    
    I.click(data['checkout']['checkoutbtn'])
    I.wait(2)
});


Scenario('Proceeding to continue shop using cart', (I) => {
    // I.amOnPage(data['URL'])
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
    I.amOnPage(data['URL'])
    I.wait(2)
    I.click(data['product_selection_1']['prduct_handle'])
    // I.fillField(data['product_selection_1']['search'],data['product_selection_1'][''])
    I.click(data['product_selection_1']['handle'])
    I.click(data['product_selection_1']['product_1'])
    I.wait(1)
    I.fillField(data['product_selection_1']['fillpin'],data['product_selection_1']['pincode'])
    I.click(data['product_selection_1']['pincheck'])
    I.click(data['product_selection_1']['Addtocart'])
    I.wait(2)    
    I.click(data['product_selection_1']['Checkcart'])    
    // I.clickP(data['product_selection_1']['remove'])
    I.wait(5)
    // I.amOnPage(data['URL'])
    within('.continue_text',() => {
            I.click('ctl00$ContentPlaceHolder1$btnContinue')
    });    
    // I.click(data['checkout']['continueshop'])
    I.wait(2)
});