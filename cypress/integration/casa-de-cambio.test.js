/* eslint-disable */
/// <reference types="Cypress" />

const URL = 'http://192.168.0.6:8080/casa-de-cambio.html'

describe('casa de cambio', () => {
    before(() => {
        cy.visit(URL)
    })

    context('test casa de cambio', () => {
        it ('agregar valores correcto', () => {
            cy.get('#moneda').select("CAD")
            cy.get('#fecha').type("2020-09-22");

            cy.get("#boton-siguiente").click().then(() => {
                cy.get("#titulo").should('have.text', 'Valor monetario de el dia 2020-09-22, en base: CAD')
            })
            cy.get("#lista li").should("have.length.above", 0)    
        })
      
        it('agregar valor incorrecto', () => {
            cy.get('#moneda').select("ISK")
            cy.get('#fecha').type("2016-09-21");

            cy.get("#boton-siguiente").click().then(() => {
                cy.get("#titulo").should('have.text', 'Verifique que haya ingresado datos o pruebe con otra fecha')
            })

        })
    })
})
