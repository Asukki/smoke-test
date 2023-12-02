export default function Tickets () {}
describe('Tickets ', () => {
   
    beforeEach(() => {
    const href = cy.url()
    console.log ('href', href)
    cy.viewport(1280, 720)    
    cy.visit('https://domains.dev.webshrinker.net/tickets/debug' )
   
})

it('See details of tickets ', () => {
    cy.wait(5000);
    cy.get('button[data-test-id="see-details"]').eq(1). click(); 
    cy.wait(2000);
    cy.get('[data-test-id="close"]'). click(); 
})
})