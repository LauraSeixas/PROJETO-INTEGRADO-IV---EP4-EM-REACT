// Importações necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type NavigationProp = StackNavigationProp<RootStackParamList>;
// Componente de tela de login
const Esqueceu = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  // Função de login
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
      if (response.status === 201) {
        // Navegar para a tela Home
        navigation.navigate("Home");
      } else {
        console.log('Erro:', response.status);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };
  const img = require('../../assets/images/Forgotpassword.png')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MindDoc+</Text>
      <Image
        source={img}
        style={styles.image}
      />
      <Text style={styles.title1}>Insira primeiro o seu e-mail</Text>
      <Text style={styles.title2}>Você receberá uma mensagem com o link para criar sua nova senha</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <Button 
      title="Enviar" 
      onPress={login}
      color={'#000'}
      />
      
      <TouchableOpacity>
        <Text style={styles.title3}>Ainda não tem conta? Faça seu cadastro!</Text>
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
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
  title1: {
    fontSize: 26,
    fontWeight: '400',
    color: '#000',
    marginBottom: 20,
  },
  title2: {
    width:350,
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
    marginBottom: 40,
    marginTop:30,

    
  },
  title3: {
   
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
    marginBottom: 40,
    marginTop:30,

    
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 20,
  },
  input: {
    width: 320,
    height: 50,
    borderColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  button: {
   
  }
});

export default Esqueceu;