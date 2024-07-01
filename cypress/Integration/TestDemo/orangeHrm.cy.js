///<reference types='cypress'/>
///<reference types="@cypress/xpath"/>

describe("OrangeHRM", () => {
  // Test case for login and logout
  it("Login logout", () => {
    // Visit the OrangeHRM login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Type the username "Admin" into the username field using XPath
    cy.xpath('//input[@name="username"]').type("Admin");

    // Type the password "admin123" into the password field
    cy.get('input[name="password"]').type("admin123");

    // Click the "Submit" button
    cy.get('button[type="submit"]').click();
  });

  // Test case for dynamic dropdown
  it("dynamic-dropdown", () => {
    // Click the "Admin" menu item
    cy.contains("Admin").click();

    // Type "Tim" into the search input field
    cy.get(".oxd-autocomplete-text-input > input").type("Tim");

    // Wait for 3 seconds to allow the dropdown options to load
    cy.wait(3000);

    // Loop through the dropdown options and click the one with the text "Timothy Lewis Amiano"
    cy.get(".oxd-autocomplete-option > span").each(($el, index, list) => {
      if ($el.text() == "Timothy Lewis Amiano") {
        cy.wrap($el).click();
      }
    });
  });

  // Test case for logout
  it("Logout", () => {
    // Click the user dropdown icon
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();

    // Click the "Logout" option from the dropdown menu
    cy.get(".oxd-dropdown-menu").contains("Logout").click();
  });
});
