/// <reference types="cypress" />
describe("Download And Compare ", () => {
    it("It should Download File", () => {
        cy.request({
          method: "GET",
          url: `https://www.cypress.io/cypress_logo_social.png`,
          encoding: 'binary', //only file or image
          failOnStatusCode: false, //only case error
        }).then((response) => {
          expect(response.status).to.eq(200);
          cy.writeFile('cypress/fixtures/logo2.png',response.body,{
            encoding:'binary',
            decodeContentFromBase64:true
          })

          //test image
          cy.fixture('logo.png','binary').then(resultBaseImg => {
            cy.fixture('logo2.png','binary').then(resultLoadImg1 => {
              expect(resultBaseImg).to.deep.eq(resultLoadImg1)
            })
          })
        
        });
    });
  });