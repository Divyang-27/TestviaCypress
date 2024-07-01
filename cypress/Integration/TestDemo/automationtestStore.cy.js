//This line specifies the types of Cypress and Cypress-XPath modules that will be used in the test
///<reference types='cypress'/>
///<reference types='@cypress/xpath'/>

//Describe the test suite for the Automation Test Store
describe('Automation test store testsuit', () => {
    //Define a test case named 'Contact-Us'
    it('Contact-Us', () => {
        //Visit the Automation Test Store website
        cy.visit('https://automationteststore.com/');
        
        //Click on the "Contact Us" link using XPath
        cy.xpath('(//*[text()="Contact Us"])[2]').click();
        
        //Type "divyang" into the "First Name" field and assert that the value is correct
        cy.get("#ContactUsFrm_first_name").type("divyang").should('have.value','divyang').and('have.attr','name','first_name');
        
        //Type "divyang@gmail.com" into the "Email" field and assert that the name attribute is correct
        cy.get("#ContactUsFrm_email").type("divyang@gmail.com").should('have.attr', 'name', 'email');
        
        //Type "Cypress training is going on" into the "Enquiry" field
        cy.get("#ContactUsFrm_enquiry").type("Cypress training is going on");
        
        //Click the "Submit" button using XPath
        cy.xpath("//button[@title='Submit']").click();
        
        //Assert that the success message "Your enquiry has been successfully sent to the store owner!" is displayed
        cy.xpath("//*[contains(text(), 'successfully')]").should('have.text', "Your enquiry has been successfully sent to the store owner!");
        
        //Log a message indicating that the test has completed and registered
        cy.log("Test completed and registered");
    });
});