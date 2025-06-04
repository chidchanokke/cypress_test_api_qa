/// <referecne types="cypress"/>
//chainablemethod : เอา method ต่อไปเลื่อยๆ
// a (aliased as an) , include (aliased as includes ,contain,and contains),length,leangthOf
describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{
                expect(result.status).to.ok
                expect(result.body).to.include.keys('data')
                expect({a:1,b:2}).to.include.keys('a')
            })
        })
    })
})