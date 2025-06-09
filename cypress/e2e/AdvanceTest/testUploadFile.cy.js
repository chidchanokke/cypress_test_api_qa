/// <reference types="cypress" />

const cypress = require("cypress");

describe("Upload File ", () => {
    it("It should return 200OK when upload file sussecc", () => {
      // xhr : ตัวส่งrequest ของ js อีกตัวนึ่ง
      cy.fixture('logo2.png','binary')
      .then(resultImageFile => {
        // Blob : หน่วยเก็บfile
      const uploadFile =  cypress.Blob.binaryStringToBlob(resultImageFile);

      const xhr = new XMLHttpRequest()
        // true = async ,false = sync
        xhr.open('POST','http://locahost:8080/xxx',false);
        //case pass:
        xhr.onload = function(){
            //xhr.responseText :ได้response text กลับมา
            cy.log('response: '+ xhr.responseText )
            var result = JSON.stringify(xhr.responseText)
            cy.log('result: '+ result )
            expect(xhr.status).to.be.eq(200)
        }
        //case error:
        xhr.onerror = function(){
            expect(xhr.status).to.be.eq(500)
        }

        const formData = new FormData();
        formData.set('multipartFile',uploadFile);
        xhr.send(formData)
      })
    });
  });