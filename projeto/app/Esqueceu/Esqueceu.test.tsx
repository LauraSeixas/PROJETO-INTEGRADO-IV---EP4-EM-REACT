import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Esqueceu from './Esqueceu';


// Mock para a navegação
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
  
  // Mock da função de fetch para interceptar as requisições
global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({}),
    status: 201,
  })
) as jest.Mock;
  
test('deve renderizar o componente corretamente', () => {
    render(<Esqueceu />);
  
    // Check for text elements
    const title = screen.getByText('MindDoc+');
    const emailPlaceholder = screen.getByPlaceholderText('Email');
    const instructionText = screen.getByText('Insira primeiro o seu e-mail');
    const infoText = screen.getByText('Você receberá uma mensagem com o link para criar sua nova senha');
    const submitButton = screen.getByText('Enviar');
    const registrationPrompt = screen.getByText('Ainda não tem conta? Faça seu cadastro!');
  
    expect(title).toBeTruthy();
    expect(emailPlaceholder).toBeTruthy();
    expect(instructionText).toBeTruthy();
    expect(infoText).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(registrationPrompt).toBeTruthy();
});