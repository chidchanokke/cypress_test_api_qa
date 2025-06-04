/// <referecne types="cypress"/>
//flagging : คล้ายๆกับcosmetic แต่มีผลต่อ assertion (ขยายassertion)
// not ,deep,nested,own,ordered,any,and all
describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{
                expect(result.status).to.ok
                expect(result.body.data).is.exist //exist = มีอยู่
                expect(result.body.data).is.not.undefined
                expect(result.body).have.any.keys('data')

            })
        })
    })
})