import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Perfil= () => {
  const Avatar = require("../../assets/images/Avatar.png")
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Image source={Avatar} style={styles.Avatar}/>
        <Text style={styles.name}>Fulano Beltrano</Text>
        <Text style={styles.jobTitle}>Senior Designer</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="notifications" size={24} color="black" />
          <Text>  Notificação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text>  Pagamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="star" size={24} color="black" />
          <Text>  Avaliações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="privacy-tip" size={24} color="black" />
          <Text>  Privacidade</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  Avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    margin:30,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 16,
    color: 'gray',
  },
  actionContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
  }
});

export default Perfil;