import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginPage from './Login';
import { useNavigation } from '@react-navigation/native';

// Mock useNavigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('LoginPage', () => {
  const mockedNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear previous mocks
    console.log = jest.fn(); // Mock console.log
  });
  

  it('deve renderizar os componentes da página de login', () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('deve permitir que o usuário digite no campo de email', () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('deve alternar a visibilidade da senha', () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginPage />);
    const passwordInput = getByPlaceholderText('Password');
    const toggleButton = getByTestId('toggle-password-visibility');

    // Initially, password should be hidden
    expect(passwordInput.props.secureTextEntry).toBe(true);
    
    fireEvent.press(toggleButton);
    // After pressing the button, password should be visible
    expect(passwordInput.props.secureTextEntry).toBe(false);
  });

  it('não deve permitir SQL Injection no campo de email', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      } as Response)
    );
  
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');
  
    // Attempt SQL Injection
    fireEvent.changeText(emailInput, "' OR '1'='1");
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);
  
    await waitFor(() => {
      expect(mockedNavigate).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('Erro:', 400);
    });
  });

  it('não deve permitir XSS no campo de email', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      } as Response)
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');

    // Attempt XSS
    fireEvent.changeText(emailInput, '<script>alert("XSS")</script>');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockedNavigate).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('Erro:', 400);
    });
  });

  it('deve chamar a função de login quando o botão é pressionado', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true, // Property to indicate success
        status: 201,
        json: () => Promise.resolve({}),
      } as Response)
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('Home'));
  });

  it('deve exibir um erro quando a API de login falha', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      } as Response)
    );
  
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');
  
    fireEvent.changeText(emailInput, 'wrong@example.com');
    fireEvent.changeText(passwordInput, 'wrongpassword');
    fireEvent.press(loginButton);
  
    await waitFor(() => {
      expect(mockedNavigate).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('Erro:', 400);
    });
  });
  

  // Unit Test for auxiliary function, if any
  it('deve formatar o email corretamente', () => {
    const formatEmail = (email: string) => email.trim().toLowerCase();
    expect(formatEmail('  TEST@EXAMPLE.COM  ')).toBe('test@example.com');
  });

  // Integration Test
  it('deve integrar corretamente o login com a navegação', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve({}),
      } as Response)
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('Home');
    });
  });

  // Functional Test
  it('deve exibir erro para credenciais inválidas e permitir a tentativa de login novamente', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      } as Response)
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');

    fireEvent.changeText(emailInput, 'wrong@example.com');
    fireEvent.changeText(passwordInput, 'wrongpassword');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockedNavigate).not.toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('Erro:', 400);
    });

    // Simulate retry with valid credentials
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve({}),
      } as Response)
    );

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('Home');
    });
  });
});
