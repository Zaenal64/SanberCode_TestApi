describe('Create Method',()=>{
    before('do login',()=>{
        //Dijalankan lebih dahulu sebelum menjalankan bawahnya
    cy.login()
    })
    /*
    1. Error validation (null, name, email and password)
    2. Error invalid email format
    3. Error email empty
    4. Error password empty
    5. Registered successfully
    6. Error duplicate entry
    */
    it('Should return error message for validation', () =>{
        cy.request({
            method: 'POST',
            url: '/registration',
            failOnStatusCode:false,
        }).then((response)=>{
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq("\"value\" must be of type object")
            expect(response.body.status).to.eq("fail")
        })
    })

    it('Should return error message for invalid email format', () =>{
            cy.request({
                method: 'POST',
                url: '/registration',
                body:{
                    name: 'zaenal',
                    email: 'zaenal$test.com',
                    password: 'Semang4t'
                },
                failOnStatusCode:false,
            }).then((response)=>{  
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("\"email\" must be a valid email")
                expect(response.body.status).to.eq("fail")
            })
        })

        it('Should return error message for empty email', () =>{
            cy.request({
                method: 'POST',
                url: '/registration',
                body:{
                    name: 'zaenal',
                    email: '',
                    password: 'Semang4t'
                },
                failOnStatusCode:false,
            }).then((response)=>{  
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("\"email\" is not allowed to be empty")
                expect(response.body.status).to.eq("fail")
            })
        })    
        
    it('Should return error message for empty password', () =>{
            cy.request({
                method: 'POST',
                url: '/registration',
                body:{
                    name: 'zaenal',
                    email: 'zaenal@test.com',
                    password: ''
                },
                failOnStatusCode:false,
            }).then((response)=>{  
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("\"password\" is not allowed to be empty")
                expect(response.body.status).to.eq("fail")
            })
        })    
    

        it('Should return correct current data', () => {
            cy.request({
                method: 'POST',
                url: '/registration',
                headers: {
                    authorization: `Bearer ${Cypress.env('token')}`,
                  },
                body:{
                    name: 'zaenal',
                    email: 'zaenal@test.com',
                    password: 'Semang4t'
                },
            }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq("Toko berhasil didaftarkan")
                expect(response.body.status).to.eq("success")
            })
        })
 
     })
    