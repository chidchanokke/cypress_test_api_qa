/// <reference types="cypress" />
describe("Test Continue  Reqeusting", () => {
    it("should return 200 OK ", () => {
      cy.fixture("resultBody").then((baseResult) => {
        cy.request({
          method: "POST",
          url: `${Cypress.env("apiUrl")}/api/register`,
          headers: {
            "x-api-key": "reqres-free-v1",
          },
          body: {
            email: "eve.holt@reqres.in",
            password: "pistol",
          },
          failOnStatusCode: false, //only case error
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.token).to.be.not.empty;
          cy.request({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/api/users?page=2`,
            headers: {
              "x-api-key": "reqres-free-v1",
              "authentication": "Bearer "+ response.body.token
            },
        }).then(result =>{
            expect(result.status).to.eq(200)
        })
        });
      });
    });
  });