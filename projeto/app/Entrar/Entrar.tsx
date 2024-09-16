import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function EntrarPage() {
  const navigation = useNavigation<NavigationProp>(); // Hook para acessar a navegação
    const img = require('../../assets/images/LogoEntrar.svg')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MindDoc+</Text>
      
      <Image
        source={img}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Encontre um médico & marque uma{' '}
        <Text style={styles.highlightedText}>consulta</Text>
      </Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')} // Navega para a tela de Login
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Cadastro")} // Navega para a tela de Cadastro
      >
        <Text style={styles.signupButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 20,
  },
  subtitle: {
    width: 300,
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    marginBottom: 40,
  },
  highlightedText: {
    fontSize: 24,
    fontWeight: '500', // Ajustado para "consulta"
  },
  loginButton: {
    width: 260,
    height: 40,  // Atualizado
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
    flexShrink: 0,  // Adicionado
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signupButton: {
    width: 260,
    height: 40,  // Atualizado
    backgroundColor: '#BCBCBC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexShrink: 0,  // Adicionado
  },
  signupButtonText: {
    color: 'black',
    fontSize: 16,
  },
});