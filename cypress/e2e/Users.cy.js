export default function users () {}
describe('Users ', () => {
   
    beforeEach(() => {
    const href = cy.url()
    console.log ('href', href)
    cy.viewport(1280, 720)   
    cy.visit('https://domains.dev.webshrinker.net', {timeout:70000})
})

it('Required fields ', () => {
    cy.wait(5000);
    cy.contains('Users'). scrollIntoView(). click();
    cy.get('[data-test-id="new-user"]'). click();
    cy.get('[data-test-id="save"]'). click();
    cy.contains('Name').next().get ('span').contains ('This field is required.');
    cy.contains('E-mail').next().get ('span').contains ('This field is required.');
    cy.contains('Role').next().get ('span').contains ('This field is required.');
    cy.contains('Password').next().get ('span').contains ('This field is required.');
    cy.contains('Confirm Password').next().get ('span').contains ('This field is required.');
})

it('Edit User ', () => {
    cy.wait(5000);
    cy.contains('Users'). scrollIntoView(). click();
    cy.get('[data-test-id="search-users"]'). click(). type('Flávia Fernandes Cypress');
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="e-mail"]'). click(). clear(). type(`flavia.ormf${Math.round(Math.random() * 100)}@gmail.com`)
    cy.get('[data-test-id="save"]'). click();
    cy.contains("User updated!").should('be.visible'); 
}) 

it('Re-generate api key/secret ', () => {
    cy.wait(5000);
    cy.contains('Users'). scrollIntoView(). click();
    cy.get('[data-test-id="search-users"]'). click(). type('Flávia Fernandes Cypress');
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="generate-key"]'). click();
    cy.contains("API Key/Secret generated successfully!").should('be.visible'); 
})

it('Disable user ', () => {
    cy.wait(5000);
    cy.contains('Users'). scrollIntoView(). click();
    cy.get('#headlessui-switch-11'). click();
    cy.get('[data-test-id="search-users"]'). click(). type('New user');
    cy.get('[data-test-id="disable"]'). click();
    cy.get('[data-test-id="confirm"]'). click();
})

it('Enable user ', () => {
    cy.wait(5000);
    cy.contains('Users'). scrollIntoView(). click();
    cy.get('#headlessui-switch-11'). click();
    cy.get('[data-test-id="search-users"]'). click(). type('New user');
    cy.get('[data-test-id="enable"]'). click();
    cy.get('[data-test-id="confirm"]'). click();
})
})