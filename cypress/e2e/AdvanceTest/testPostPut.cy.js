

/// <reference types="cypress" />

describe('User', () => {
    describe('Create User', () => {
      it('should return 201 Created ', () => {
        cy.request({
          method: 'POST',
          url: `${Cypress.env('apiUrl')}/api/users`,
          headers: {
            'x-api-key': 'reqres-free-v1'
          },
          body:{
            "name": "morpheus",
            "job": "leader"
            
          },
          failOnStatusCode: false 
        }).then((response) => {
          expect(response.status).to.eq(201);             
          
        });
      });
    });

    describe('Update User : Put', () => {
        it('should return 200 Updated', () => {
          cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiUrl')}/api/users/2`,
            headers: {
              'x-api-key': 'reqres-free-v1'
            },
            body:{
                "name": "morpheus",
                "job": "zion resident"
            },
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.eq(200);       
            expect(response.body).to.not.be.empty;      
            
          });
        });
      });

      describe('Update User : Patch', () => {
        it('should return 200 Updated', () => {
          cy.request({
            method: 'PATCH',
            url: `${Cypress.env('apiUrl')}/api/users/2`,
            headers: {
              Authorization: `Bearer ${Cypress.env('token')}`,
              'x-api-key': 'reqres-free-v1'
            },
            body:{
                "name": "morpheus",
                "job": "zion resident"
            },
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.eq(200);       
            expect(response.body).to.not.be.empty;      
            
          });
        });
      });

      describe('Update User : Delete', () => {
        it('should return 204 No Content', () => {
          cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiUrl')}/api/users/2`,
            headers: {
              Authorization: `Bearer ${Cypress.env('token')}`,
              'x-api-key': 'reqres-free-v1'
            },
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.eq(204);                   
          });
        });
      });

  });
  