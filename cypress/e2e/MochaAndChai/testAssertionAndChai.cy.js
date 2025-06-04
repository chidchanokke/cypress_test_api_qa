/// <referecne types="cypress"/>
//assertion : สิ่งที่อยากตรวจสอบ
//ok,true,fasle,null,undefined,NaN,exsit,empty,arguments,itself,sealed,frozen,finite
describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{
                expect(result.status).ok
                expect(result.body.data).exist //exist = มีอยู่
                // expect(result.body.data).null //error case
                // expect(result.body.data).empty //error case
            })
        })
    })
})