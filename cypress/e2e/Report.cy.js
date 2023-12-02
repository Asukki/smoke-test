export default function Reports () {}
describe('Reports ', () => {
   
    beforeEach(() => {
    const href = cy.url()
    console.log ('href', href)
    cy.viewport(1280, 720)
    cy.visit('https://domains.dev.webshrinker.net')
})

it('Search domains report ', () => {
    cy.wait(5000);
    cy.get('[data-test-id="support"]'). click();
    cy.contains('Reports'). scrollIntoView(). click();
    cy.get('[data-test-id="search-domains"]'). click(). type('flavia.dmt.example,juan.dmt.example,felipe.dmt.example,gabriel.dmt.example');
    cy.wait(3000);
    cy.get('[data-test-id="search"]'). click();
})

})