///<reference types='cypress'/>
///<reference types='@cypress/xpath'/>

describe('Test Suite', () => {
    // Visit the website before each test case
    beforeEach('Visiting the website', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    // Test case for checkbox operations
    it('CheckBox', () => {
        // Check the first checkbox and assert its value and checked state
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

        // Check the second checkbox and assert its value and checked state
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2');

        // Uncheck the first checkbox and assert its unchecked state
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // Check all three checkboxes
        cy.get('[type="checkbox"]').check(['option1', 'option2', 'option3']);
    });

    // Test case for radio button operations
    it('radioButton', () => {
        // Check the first radio button and assert its value
        cy.get('input[value="radio1"]').check().should('have.value', 'radio1');

        // Check the second radio button using the label
        cy.get('[for="radio2"] > .radioButton').check();
    });

    // Test case for dropdown operations
    it('dropdown', () => {
        // Select the third option from the dropdown and assert its value
        cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3');
    });

    // Test case for dynamic dropdown operations
    it('Dynamic-dropdown', () => {
        // Type "IND" into the autocomplete input field
        cy.get('#autocomplete').type('IND');

        // Click the "India" option from the dropdown
        cy.get('.ui-menu-item > div').each(($el, index, $list) => {
            if ($el.text() == 'India') {
                cy.wrap($el).click();
            }
        });

        // Assert that the autocomplete input field has the value "India"
        cy.get('#autocomplete').should("have.value", "India");
    });

    // Test case for alert operations
    it('Alert', () => {
        // Click the "Alert" button and assert the alert message
        cy.get("#alertbtn").click();
        cy.on("window:alert", (message) => {
            expect(message).to.eq("Hello , share this practice page and share your knowledge");
            return true;
        });
    });

    // Test case for confirm button operations
    it('confirm btn', () => {
        // Click the "Confirm" button and assert the confirm message
        cy.get("#confirmbtn").click();
        cy.on("window:confirm", (message) => {
            expect(message).to.eq("Hello , Are you sure you want to confirm?");
            return false;
        });
    });
});
