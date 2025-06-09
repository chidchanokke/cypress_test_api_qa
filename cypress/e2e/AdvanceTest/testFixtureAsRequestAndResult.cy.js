/// <reference types="cypress" />

describe("Fixture As Request", () => {
  it("should return 201 Created ", () => {
    cy.fixture("reqBody").then((bodyReq) => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/api/users`,
        headers: {
          "x-api-key": "reqres-free-v1",
        },
        body: bodyReq,
        failOnStatusCode: false, //only case error
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
describe("Fixture As Response", () => {
    it("should return 200 OK ", () => {
      cy.fixture("resultBody").then((baseResult) => {
        cy.request({
          method: "GET",
          url: `${Cypress.env("apiUrl")}/api/users?page=2`,
          headers: {
            "x-api-key": "reqres-free-v1",
          },
          failOnStatusCode: false, //only case error
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.eq(baseResult);
        });
      });
    });
  });