describe('Cadastro', () => {
    it('acessar site',() => {
        cy.visit('../cypress/fixtures/FormCadastro/index.html');
        cy.wait(1000)
    })

    it('Validação de campos obrigados',() => {
        cy.visit('../cypress/fixtures/FormCadastro/index.html');
        cy.wait(1000) 
        cy.get('#enviar').click();   
    })

    it('Cadastro sucedico',() => {
        cy.visit('../cypress/fixtures/FormCadastro/index.html');
        cy.wait(1000)
        cy.get('#name').type('oi') 
        cy.wait(1000) 
        cy.get('#email').type('oi@gmail.com')
        cy.wait(1000) 
        cy.get('#password').type('5544')
        cy.wait(1000) 
        cy.get('#enviar').click();  
    })

    it('Evitar Duplicados',() => {
        cy.visit('../cypress/fixtures/FormCadastro/index.html');
        cy.wait(1000)
        cy.get('#name').type('oi') 
        cy.wait(1000) 
        cy.get('#email').type('oi@gmail.com')
        cy.wait(1000) 
        cy.get('#password').type('5544')
        cy.wait(1000) 
        cy.get('#enviar').click();  
        cy.wait(1000)
        cy.get('#name').type('oi') 
        cy.wait(1000) 
        cy.get('#email').type('oi@gmail.com')
        cy.wait(1000) 
        cy.get('#password').type('5544')
        cy.wait(1000) 
        cy.get('#enviar').click();  
        cy.wait(1000) 
    })

    it('Limpar Cadastro',() => {
        cy.visit('../cypress/fixtures/FormCadastro/index.html');
        cy.wait(1000)
        cy.get('#name').type('oi') 
        cy.wait(1000) 
        cy.get('#email').type('oi@gmail.com')
        cy.wait(1000) 
        cy.get('#password').type('5544')
        cy.wait(1000) 
        cy.get('#enviar').click();  
        cy.wait(1000)
        cy.get('#clear-list').click();
        cy.wait(1000)
    })
});