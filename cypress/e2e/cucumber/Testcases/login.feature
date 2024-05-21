Feature: Login Test
Scenario: Loging with valid user

             Given A user opens the login page
             When A user enter username "standard_user"
              And A user enter the password "secret_sauce"
              And A user clicks on login button
             Then A user must be successful logged in

Scenario: Login with invalid password
    
             Given A user opens the login page
             When A user enter username "standard_user"
              And A user enter the password "Test@123"
              And A user clicks on login button
             Then A user must get error  message

