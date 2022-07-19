import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
    
//test steps 
Given('User navigates to {string} url', (urlName) => {
    cy.visit(Cypress.env(urlName), {failOnStatusCode: false});
})

Then('User checks console for any errors', () => {
    cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0);
        expect(win.console.warn).to.have.callCount(0);
    });
})

Then('User checks the response status of {string} page to be {int}', (urlName, responseCode) => {
    cy.request({url: Cypress.env(urlName), failOnStatusCode: false}).should((response) => {
        expect(response.status).to.eq(responseCode);
    })
});

Then('User checks all the links on the page', () => {
    //Looping through each link/image
    // cy.get("[href]:not([href*='mailto:'])").each($el => {
    //     const message = $el.text();
    //     expect($el, message).to.have.attr("href").not.contain("undefined");
    //     cy.log($el.attr('href'));
    //     cy.request({url: $el.prop('href'), failOnStatusCode: false}).should((response) => {
    //         expect(response.status, message).to.eq(200);
    //     });
    // });

    //without looping through each link/image
    cy.get('*[href="#undefined"]').should('have.length', 0)
})