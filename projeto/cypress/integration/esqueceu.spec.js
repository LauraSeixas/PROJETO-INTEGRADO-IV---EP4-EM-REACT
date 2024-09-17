describe('Esqueceu Component', () => {
    it('deve funcionar corretamente', () => {
      cy.visit('/esqueceu');
  
      cy.get('input[placeholder="Email"]').type('test@example.com');
      cy.get('button').contains('Enviar').click();
  
      cy.contains('Mensagem enviada com sucesso').should('be.visible');
    });
  });
  