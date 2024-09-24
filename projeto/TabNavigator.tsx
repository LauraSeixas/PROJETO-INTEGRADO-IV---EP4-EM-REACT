// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 // Importe sua tela de Perfil
// Opcional para ícones
import HomeScreen from './app/Home/Home';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from './types';
import Agendar from './app/Agendar/Agendar';
import MinhasConsultas from './app/MinhasConsultas/minhaConsulta';
import Perfil from './app/Perfil/Perfil';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return(
  <Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#fff',
      borderTopWidth: 0,
      elevation: 0, // Remove sombra no Android
    },
    tabBarActiveTintColor: '#6200ee',
    tabBarInactiveTintColor: '#gray',
  }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="MinhasConsultas" component={MinhasConsultas}/>
    <Tab.Screen name="Perfil" component={Perfil}/>
    {/*<Tab.Screen name="Agendar" component={Agendar} />
    <Tab.Screen name="Profile" component={ProfileScreen} />*/}
  </Tab.Navigator>
  ) 
};

export default TabNavigator;
