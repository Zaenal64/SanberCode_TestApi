describe('Update Method',()=>{
    
    before('do login',()=>{   
    //Dijalankan lebih dahulu sebelum menjalankan bawahnya
    cy.login()
    })
    /*
    1. Error Unauthorized
    2. Return data not found
    3. Return success delete data user
    */
    it('Should return unauthorized when send no token', ()=> {
        cy.checkUnauthorized('DELETE', '/units/89edb018-fbeb-44fb-bb3a-945596852fa1')
    })

    it('Should return user not found', () => {    
        cy.request({
          method: 'DELETE',
          url: '/units/891823122',
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
        },
            failOnStatusCode:false, 
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.message).to.eq("id tidak valid")
            expect(response.body.status).to.eq("fail")
        })
    })   



    it('Should return success delete data user', () => {    
        cy.request({
          method: 'DELETE',
          url: '/units/89edb018-fbeb-44fb-bb3a-945596852fa1',
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
          },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq("success")
           
        })
    })    
})