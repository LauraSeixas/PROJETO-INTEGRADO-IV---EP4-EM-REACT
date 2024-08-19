import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
 // Usando axios para as requisições HTTP

const CadastroPage = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const url = 'http://localhost:3000/v0/singup';
     // Substitua pela sua URL de cadastro

    try {
      const response = await  fetch(url, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:nome,
          email,
          password,
        }),
      });

      console.log(response); // Adicionado para depuração

      if (response.status === 200 || response.status === 201) {
        // Se a requisição for bem-sucedida
        navigation.navigate('Home'); // Navega para a tela 'Home'
      } else {
        // Se a requisição falhar
        console.log('Erro: ', response.status);
      }
    } catch (error) {
      console.log('Erro de rede: ', error);
    }
  };
    const img = require('../../assets/images/Signupbro.png') 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MindDoc+</Text>
      <Image source={img} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
        <Text style={styles.togglePassword}>
          {passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
        </Text>
      </TouchableOpacity>
      <Button
        title="Criar conta"
        onPress={() => {
          if (nome !== '' && email !== '' && password !== '') {
            handleRegister(); // Chama a função de cadastro
          } else {
            console.log('Preencha todos os campos');
          }
        }}
        color="black"
      />
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>ou</Text>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Entrar com o Google')}>
        
        <Text style={styles.googleButtonText}>Cadastrar com o Google</Text>
      </TouchableOpacity>
      <View style={styles.loginRedirect}>
        <Text style={styles.redirectText}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.redirectLink}>Entre!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  togglePassword: {
    color: 'blue',
    marginVertical: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  orText: {
    marginHorizontal: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  googleButtonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 10,
  },
  loginRedirect: {
    flexDirection: 'row',
    marginTop: 20,
  },
  redirectText: {
    color: 'black',
  },
  redirectLink: {
    color: 'blue',
  },
});

export default CadastroPage;
