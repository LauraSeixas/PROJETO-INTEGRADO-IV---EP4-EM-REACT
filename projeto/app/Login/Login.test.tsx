import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import LoginPage from './Login';
import { useNavigation } from '@react-navigation/native';

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

// Teste de renderização do login
test('renderiza os campos de email e senha', () => {
  render(<LoginPage />);
  
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  
  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});

// Teste de proteção contra SQL Injection
test('não permite SQL Injection no campo de email', async () => {
  const { getByPlaceholderText, getByText } = render(<LoginPage />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  fireEvent.changeText(emailInput, "' OR 1=1 --");
  fireEvent.changeText(passwordInput, "anyPassword");

  fireEvent.press(loginButton);

  expect(fetch).not.toHaveBeenCalledWith(
    expect.stringMatching(/'.* OR 1=1 --/),
    expect.anything()
  );
});

// Teste de proteção contra XSS
test('não permite XSS no campo de email', async () => {
  const { getByPlaceholderText, getByText } = render(<LoginPage />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  // Simula um ataque XSS
  fireEvent.changeText(emailInput, "<script>alert('XSS')</script>");
  fireEvent.changeText(passwordInput, "anyPassword");

  fireEvent.press(loginButton);

  expect(fetch).not.toHaveBeenCalledWith(
    expect.stringContaining("<script>alert('XSS')</script>"),
    expect.anything()
  );
});

// Teste de navegação para a Home
test('navega para a tela Home ao fazer login com sucesso', async () => {
  const mockNavigate = jest.fn();
  jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
    navigate: mockNavigate,
  });

  const { getByPlaceholderText, getByText } = render(<LoginPage />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  fireEvent.changeText(emailInput, 'email@teste.com');
  fireEvent.changeText(passwordInput, 'senha123');
  fireEvent.press(loginButton);

  expect(mockNavigate).toHaveBeenCalledWith('HomeTabs');
});
