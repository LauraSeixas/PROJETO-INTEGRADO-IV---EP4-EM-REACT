import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import EntrarPage from './Entrar';
import { useNavigation } from '@react-navigation/native';

// Mova o mock para fora dos testes
// Os testes fornecidos são testes de unidade focados na validação do comportamento da interface do usuário e navegação na sua aplicação React Native

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
//Teste de Renderização dos Botões
test('renderiza os botões de login e cadastro', () => {
  render(<EntrarPage />);
  const loginButton = screen.getByText('Login');
  const signupButton = screen.getByText('Cadastrar');
  
  expect(loginButton).toBeTruthy();
  expect(signupButton).toBeTruthy();
});
//Teste de Navegação para Login
test('renderiza os botões de login e cadastro', () => {
  render(<EntrarPage />);
  const loginButton = screen.getByText('Login');
  const signupButton = screen.getByText('Cadastrar');
  
  expect(loginButton).toBeTruthy();
  expect(signupButton).toBeTruthy();
});
//Teste de Navegação para Cadastro
test('navega para Login ao pressionar o botão de login', () => {
  // Obter o mock de navigate diretamente
  const mockNavigate = jest.fn();
  jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
    navigate: mockNavigate,
  });

  render(<EntrarPage />);
  const loginButton = screen.getByText('Login');
  fireEvent.press(loginButton);

  expect(mockNavigate).toHaveBeenCalledWith('Login');
});

test('navega para Cadastro ao pressionar o botão de cadastro', () => {
  // Obter o mock de navigate diretamente
  const mockNavigate = jest.fn();
  jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
    navigate: mockNavigate,
  });

  render(<EntrarPage />);
  const signupButton = screen.getByText('Cadastrar');
  fireEvent.press(signupButton);

  expect(mockNavigate).toHaveBeenCalledWith('Cadastro');
});