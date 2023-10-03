describe('Update Method',()=>{
    
    before('do login',()=>{   
    //Dijalankan lebih dahulu sebelum menjalankan bawahnya
    cy.login()
    })
    /*
    1. Error Unauthorized
    2. Return data not found
    3. Return correct current data 
    */
    it('Should return unauthorized when send no token', ()=> {
        cy.checkUnauthorized('PUT', '/users/89edb018-fbeb-44fb-bb3a-945596852fa1')
    })

    it('Should return user not found', () => {    
        cy.request({
          method: 'PUT',
          url: '/users/891823122',
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
          },
          body: {
            name: 'Update zaenal',
            email: 'UpdateZaenal@test.com'
        },
            failOnStatusCode:false, 
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.message).to.eq("id tidak valid")
            expect(response.body.status).to.eq("fail")
        })
    })   



    it('Should return correct current data update', () => {    
        cy.request({
          method: 'PUT',
          url: '/users/89edb018-fbeb-44fb-bb3a-945596852fa1',
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
          },
          body: {
            name: 'Update zaenal',
            email: 'UpdateZaenal@test.com'
        }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("User berhasil diupdate")
            expect(response.body.status).to.eq("success")
           
        })
    })    
})