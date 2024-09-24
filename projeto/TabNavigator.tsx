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
import { Entypo,Feather } from '@expo/vector-icons';
import { color } from 'react-native-elements/dist/helpers';

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

    tabBarActiveTintColor: '#C8DEFB',
    tabBarInactiveTintColor: '#gray',
  }}
  >
    <Tab.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{
      tabBarIcon:({size,color }) => (
        <Entypo name="home" size={size} color={color}/>

      )
    }}
    />

    <Tab.Screen 
    name="Minhas Consultas" 
    component={MinhasConsultas}
    options={{
      tabBarIcon:({size,color }) => (
        <Feather name="calendar" size={size} color={color}/>

      )
    }}
    />

    <Tab.Screen 
    name="Perfil" 
    component={Perfil}
    options={{
      tabBarIcon:({size,color }) => (
        <Feather name="user" size={size} color={color}/>

      )
    }}
    />
    {/*<Tab.Screen name="Agendar" component={Agendar} />
    <Tab.Screen name="Profile" component={ProfileScreen} />*/}
  </Tab.Navigator>
  ) 
};

export default TabNavigator;
