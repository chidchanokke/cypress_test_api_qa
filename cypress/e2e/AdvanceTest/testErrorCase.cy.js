

/// <reference types="cypress" />

    describe('Error Request', () => {
      it('should return 404 Not Found ', () => {
        cy.request({
          method: 'GET',
          url: `${Cypress.env('apiUrl')}/api/unknown/23`,
          headers: {
            'x-api-key': 'reqres-free-v1'
          },
          failOnStatusCode: false //only case error
        }).then((response) => {
          expect(response.status).to.eq(404);             
          
        });
      });
    });