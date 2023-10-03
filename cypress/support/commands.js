// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    const userData = {
        name: 'nama Toko',
        email: 'sample@example.com',
        password: '123adsfadf@'
      }
  
    cy.request({
      method: 'POST',
      url: '/registration',
      body: userData,
    })
  
    cy.request({
      method: 'POST',
      url: '/authentications',
      body: {
        email: userData.email,
        password: userData.password,
      },
    }).then((response) => {
      Cypress.env('token', response.body.data.accessToken)
    })
  })

  Cypress.Commands.add('checkUnauthorized',(method, url) =>{
    cy.request({
        method,
        url,
        Headers:{
            authorization: null,
        },
        failOnStatusCode: false,
    }).then((response) => {
        cy.unauthorized(response)
    })
})
Cypress.Commands.add('unauthorized', (response) =>{
  expect(response.status).to.eq(401)
  expect(response.body.message).to.eq("Missing authentication")
  expect(response.body.error).to.eq("Unauthorized")
})