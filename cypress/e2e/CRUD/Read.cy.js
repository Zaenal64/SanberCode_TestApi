describe('Read Method',()=>{
    
    before('do login',()=>{   
    //Dijalankan lebih dahulu sebelum menjalankan bawahnya
    cy.login()
    })
    /*
    1. Error Unauthorized
    2. Return correct current data
    */
    it('Should return unauthorized when send no token', ()=> {
        cy.checkUnauthorized('GET', '/users')
    })

        
        it('Should return get User List', () => {
            
            cy.request({
              method: 'GET',
              url: '/users',
              headers: {
                authorization: `Bearer ${Cypress.env('token')}`,
              }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.eq("success")
               
            })
        })
})