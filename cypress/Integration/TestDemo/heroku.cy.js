///<reference types='cypress'/>
///<reference types='@cypress/xpath'/>

describe('Heroku', () => {
    it('Heroku login', () => {
        // Visit the Heroku login page
        cy.visit("https://the-internet.herokuapp.com/login");
        
        // Type the username "tomsmith" into the username field
        cy.get('#username').type('tomsmith');
        
        // Type the password "SuperSecretPassword!" into the password field using XPath
        cy.xpath('//input[@id="password"]').type('SuperSecretPassword!');
        
        // Click the "Login" button using XPath
        cy.xpath('//button[@class="radius"]').click();
        
        // Click the "Logout" link
        cy.contains(" Logout").click();
    });
});