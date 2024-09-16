// Importações necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Snackbar, IconButton } from "react-native-paper";

type NavigationProp = StackNavigationProp<RootStackParamList>;
// Componente de tela de login
const LoginPage = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  // Função de login
  const Home = ()=>{
    navigation.navigate('HomeTabs');
  }

  const login = async () => {
    
    try {
      const response = await fetch('http://localhost:3000/v0/singin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data)
      if (response.status === 201) {
        // Navegar para a tela Home
        navigation.navigate('HomeTabs');
      } else {
        console.log('Erro:', response.status);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };
  const img = require('../../assets/images/Mobile-login-cuate.svg')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MindDoc+</Text>
      <Image source={img} style={styles.image} />

      <View style={styles.inputContainer}>
        <IconButton icon="email" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <IconButton icon="lock" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity 
          onPress={() => setPasswordVisible(!passwordVisible)} 
          style={styles.togglePassword} 
          testID="toggle-password-visibility"
        >
          <IconButton icon={passwordVisible ? "eye-off" : "eye"} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.or}>ou</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('entrei pelo google')}>
        <IconButton icon="google" style={styles.icon}/>
        <Text style={styles.googleButtonText}>Continuar com o Google</Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={styles.registerContainer}>
        <Text style={styles.noAccountText}>
          Ainda não tem conta? <Text style={styles.registerText}>Faça seu cadastro!</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
    marginBottom: 15,
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 291,
    height: 38,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
  togglePassword: {
    marginHorizontal: 8,
  },
  togglePasswordText: {
    color: 'blue',
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    width: 321, 
    flexShrink: 0,
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 30,
  },
  forgotPassword: {
    color: '#025AC2',
    fontSize: 13,
    fontWeight: '400',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    width: 130,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  or: {
    marginHorizontal: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCCC',
    padding: 10,
    width: 321, 
    height: 40, 
    flexShrink: 0,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#263238',
    padding: 10,
    width: 321, 
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  btnText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 16,
  },
  googleButtonText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 10,
  },
   registerContainer: {
    marginTop: 20,
  },
  noAccountText: {
    color: '#222221',
    fontSize: 14,
    fontWeight: '400',
  },
  registerText: {
    color: '#025AC2',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginPage;