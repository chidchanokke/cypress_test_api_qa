/// <referecne types="cypress"/>
//method : คล้ายๆกับcassertion แต่มีactionในการcheckของมัน
// a (aliased as an) , include (aliased as includes ,contain,and contains),equal,eq,above,below,lear,most,witin,instaceof,property,ownPropertyDescriptor,lengthOf,match,string,keys,throw,respondTo,safisfy (บอก),closeTo,members,oneOf,change,increase,decrease,by,and fail
describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.request('https://reqres.in/api/users?page=2').then(result =>{
                expect(result.status).to.ok
                expect(result.body.data).is.length.above(5)
                expect(result.body.data).is.length.below(7) 
                cy.get(result.body.data).each(item => {
                    expect(item.email).to.contain('@') //มี@อยู่ไหม
                })            
            })
        })
    })
})