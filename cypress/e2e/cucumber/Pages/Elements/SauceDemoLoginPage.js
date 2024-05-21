class SauceDemoLoginPage{
    elements = {
        usernameInput: () => cy.get("#user-name"),
        passwordInput:()=> cy.get("#password"),
        loginBTN:()=>cy.get("#login-button"),
        errorMessage:() =>cy.get('h3')

    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBTN().click();
    }

}
module.exports = new SauceDemoLoginPage();