
//only , skip
// describe('Unit Test FizzBuzz',() => {
//     function numsExpectedToEq(arr,expected){
//         arr.forEach(num => {
//             expect(fizzbuzz(num)).to.eq(expected)
//         });
//     }

//     it.only('returns "fizz" when number is multiple of 3',()=>{
//         numsExpectedToEq([9,12,18],'fizz')
//     })

//     it('returns "fizz" when number is multiple of 5',()=>{
//         numsExpectedToEq([10,15,20],'fizz')
//     })

//     it('returns "fizz" when number is multiple of 5 and 3',()=>{
//         numsExpectedToEq([15,30,60],'fizz')
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
        it.only('It should Return 200OK with user collection',()=>{
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