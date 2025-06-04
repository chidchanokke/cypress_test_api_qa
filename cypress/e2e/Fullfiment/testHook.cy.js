//เงื่อนไขรูปแบบหนึ่ง ของการrunอะไรบ้างอย่างก่อนเริ่มต้น test case หรือ การtestแต่ละตัว

// describe('Hooks',() => {
//     before(() =>{
//         //run ครั้งเดียวก่อนเริ่ม test
//     })
//     beforeEach(() =>{
//         //runก่อน และเริ่มตาม testcase
//     })
//     afterEach(() =>{
//         //runหลัง testcase
//     })
//     after(() =>{
//         //run ครั้งเดียว และหลังเริ่ม test
//     })
   
// })

/// <referecne types="cypress"/>

before(() =>{
    //run ครั้งเดียวก่อนเริ่ม test
    cy.log('at before')
})
beforeEach(() =>{
    //runก่อน และเริ่มตาม testcase
    cy.log('at beforeEach')
    cy.request('https://reqres.in/api/users?page=2').as('req')
})
afterEach(() =>{
    //runหลัง testcase
    cy.log('at afterEach')
})
after(() =>{
    //run ครั้งเดียว และหลังเริ่ม test
    cy.log('at after')
})

describe('User',()=>{
    describe('Get User Collertion',()=>{
        it('It should Return 200OK with user collection',()=>{
            cy.get('@req').then(result =>{
                expect(result.status).to.eq(200)
            })
        })
    })

    describe('Get User by Id',()=>{
        it('It should Return 200OK with user equals 2',()=>{
            cy.get('@req').then(result =>{
                expect(result.status).ok
               
            })
        })
    })
})