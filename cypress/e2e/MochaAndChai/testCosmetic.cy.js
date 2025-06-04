/// <referecne types="cypress"/>
//cosmetic : เสริมแต่งให้โค้ดอ่านง่ายขึ้น
//to,be,been,is,that,which,and,has,have,with,at,of,same,but,and does
describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{
                expect(result.status).to.ok
                expect(result.body.data).is.exist //exist = มีอยู่
                expect(result.body.data).have.lengthOf(6) 
            })
        })
    })
})