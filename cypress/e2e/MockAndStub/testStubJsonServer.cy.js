
/// <referecne types="cypress"/>
describe('Stub User',()=>{
    describe('Stub GET User',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('http://localhost:3000/user').then(result =>{
                //สร้างserverปลอม
                
                expect(result.status).ok
                expect(result.body.data).exist
                expect(result.body.data).not.null
            })
        })
    })

   
   
})