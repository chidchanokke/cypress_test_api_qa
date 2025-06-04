// //simple code
// cy.visit('htttp://app.com')
// cy.request('https://app.com/me')
// .its('body.showWizard')
// .then((val)=>{
//     if(val){
//         cy.get('#wizard').contains('Close').click()
//     }
// })
// .get(...)
// .should(...)
// .click(...)
/////

/// <referecne types="cypress"/>

describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{

                if(result.body.page == 2){
                    cy.log('page == 2')
                    expect(result.status).ok
                }else{
                    cy.log('page != 2')
                    expect(result.status).to.eq(500)
                }
            })
        })
    })
})