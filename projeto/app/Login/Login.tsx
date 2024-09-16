// Importações necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

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
      
    // Verificar se os campos de email e senha estão preenchidos
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos antes de prosseguir.');
      return;
    }
      
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
  const img = require('../../assets/images/Mobilelogincuate.png')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MindDoc+</Text>
      <Image
        source={img}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
        <Text style={styles.togglePassword}>
        {passwordVisible ? 'Esconder a senha' : 'Mostrar a senha'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(

) => navigation.navigate('Esqueceu')}>
  <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
</TouchableOpacity>
      <Button title="Entrar" onPress={Home} color="#000" />
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.or}>ou</Text>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('entrei pelo google')}>
        
        <Text style={styles.googleButtonText}>Continuar com o Google</Text>
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
  togglePassword: {
    color: 'blue',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '300',
    alignSelf: 'flex-end',
    marginBottom: 20,
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
    borderRadius: 8,
    width: 320,
  },
  googleButtonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 10,
  },
});

export default LoginPage;
