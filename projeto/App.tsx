import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import EntrarPage from './app/Entrar/Entrar';
import Login from './app/Login/Login';
import Home from './app/Home/Home';
import Cadastro from './app/Cadastro/Cadastro';
import { RootStackParamList } from './types'; // Importando o tipo
import { NavigationContainer } from '@react-navigation/native';
import Esqueceu from './app/Esqueceu/Esqueceu'

const Stack = createStackNavigator<RootStackParamList>();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrar">
        <Stack.Screen name="Entrar" component={EntrarPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Esqueceu" component={Esqueceu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}