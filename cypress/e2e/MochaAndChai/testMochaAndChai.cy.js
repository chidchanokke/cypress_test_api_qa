
/// <referecne types="cypress"/>
describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{
                expect(result.body.data.page).to.eq(2)
            })
        })
    })

    describe('Get User by Id',()=>{
        it('It should Return 200OK with user equals 2',()=>{
            cy.request('https://reqres.in/api/users/2').then(result =>{
                expect(result.status).ok
                expect(result.body.data.id).to.eq(2)
               
            })
        })
    })
})