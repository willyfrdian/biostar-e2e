//command to check url
Cypress.Commands.add('checkURL', (web) => {
  const website = web;
  cy.visit(`${website}`);
  cy.request('GET', `${website}`).then((response) => {
    expect(response.status).to.eq(200);
    cy.log('Koneksi aman');
  });
});