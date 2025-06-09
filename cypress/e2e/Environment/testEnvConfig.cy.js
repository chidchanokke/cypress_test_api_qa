

/// <reference types="cypress" />

describe('User', () => {
    describe('Get User Collection', () => {
      it('should return 200 OK with user collection', () => {
        cy.request({
          method: 'GET',
          url: `${Cypress.env('apiUrl')}/api/users?page=1`, // เพิ่ม `/api` ให้ถูกต้องกับ Reqres API
          headers: {
            Authorization: `Bearer ${Cypress.env('token')}`,
            'x-api-key': 'reqres-free-v1'
          },
          failOnStatusCode: false // ย้ายออกมาอยู่นอก headers
        }).then((response) => {
          expect(response.status).to.eq(200);             
          expect(response.body.data).to.exist;           
          expect(response.body.data).to.be.an('array'); 
        });
      });
    });
  });
  