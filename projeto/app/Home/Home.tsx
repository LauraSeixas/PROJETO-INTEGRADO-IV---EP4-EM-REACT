import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, ViewBase} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = () =>{
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Olá, Fulana Beltrana</Text>
          <Image source={{ uri: 'https://your-image-url.com/avatar.jpg' }} style={styles.avatar} />
        </View>
  
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Como você se sente?</Text>
          <Text style={styles.cardSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Encontre um médico</Text>
            <Icon name="arrow-forward-ios" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View style={styles.divider} />
        </View>
        <Text style={styles.sectionTitle}>Médicos disponíveis</Text>
        <TouchableOpacity style={styles.doctorCard}>
          <Image source={{ uri: 'https://your-image-url.com/doctor.jpg' }} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dra. Fulana Beltrana</Text>
            <Text style={styles.doctorSpecialty}>Psiquiatra</Text>
            <Text style={styles.doctorRating}>⭐️ 4.8 - 2100 avaliações</Text>
            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar consulta</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorCard}>
          <Image source={{ uri: 'https://your-image-url.com/doctor.jpg' }} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dra. Fulana Beltrana</Text>
            <Text style={styles.doctorSpecialty}>Psiquiatra</Text>
            <Text style={styles.doctorRating}>⭐️ 4.8 - 2100 avaliações</Text>
            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar consulta</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorCard}>
          <Image source={{ uri: 'https://your-image-url.com/doctor.jpg' }} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dra. Fulana Beltrana</Text>
            <Text style={styles.doctorSpecialty}>Psiquiatra</Text>
            <Text style={styles.doctorRating}>⭐️ 4.8 - 2100 avaliações</Text>
            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar consulta</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorCard}>
          <Image source={{ uri: 'https://your-image-url.com/doctor.jpg' }} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dra. Fulana Beltrana</Text>
            <Text style={styles.doctorSpecialty}>Psiquiatra</Text>
            <Text style={styles.doctorRating}>⭐️ 4.8 - 2100 avaliações</Text>
            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar consulta</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorCard}>
          <Image source={{ uri: 'https://your-image-url.com/doctor.jpg' }} style={styles.doctorImage} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dra. Fulana Beltrana</Text>
            <Text style={styles.doctorSpecialty}>Psiquiatra</Text>
            <Text style={styles.doctorRating}>⭐️ 4.8 - 2100 avaliações</Text>
            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar consulta</Text>
              <Image/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* Repetir o TouchableOpacity para outros médicos */}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
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
    card: {
      padding: 20,
      margin: 20,
      backgroundColor: '#C8DEFB',
      borderRadius: 10,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardSubtitle: {
      fontSize: 14,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    doctorCard: {
      flexDirection: 'row',
      padding: 10,
      margin: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
    },
    doctorImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    doctorInfo: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    doctorName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    doctorSpecialty: {
      fontSize: 14,
    },
    doctorRating: {
      fontSize: 12,
    },
    scheduleButton: {
      backgroundColor: '#4CAF50',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 10,
    },
    scheduleButtonText: {
      color: '#fff',
    },
    button: {
      flexDirection: 'row',
      backgroundColor: '#007BFF', // Cor do botão
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      marginRight: 5,
    },


});

export default HomeScreen;