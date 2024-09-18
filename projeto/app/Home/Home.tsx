import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, ViewBase} from 'react-native';

import { Cards } from '../../component/cards';


const Doutores = [
  {
    id:0,
    name:"Dr. Mozar",
    Professional:"Psiquiatra",
    assessment: 5,
    address:"av quiteria oliveira lima 430 Ceara"
  },
  {
    id:1,
    name:"Dr. Fernando",
    Professional:"Psiquiatra",
    assessment: 4,
    address:"av quiteria oliveira lima 430 Ceara"

  },
  {
    id:2,
    name:"Dra.Laura",
    Professional:"Psiquiatra",
    assessment: 5,
    address:"av quiteria oliveira lima 430 Ceara"

  },
  {
    id:3,
    name:"Dr. Osvaldo",
    Professional:"Psiquiatra",
    assessment: 4,
    address:"av quiteria oliveira lima 430 Ceara"

  }
]

const HomeScreen = () =>{

    const Avatar = require("../../assets/images/Avatar.png")
    const ImagemCard = require("../../assets/images/Medicine-cuate1.png")
    const ArrowRight = require("../../assets/images/arrowRight.png")
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Olá,
            Fulana Beltrana
            </Text>
          <Image source={Avatar} style={styles.avatar}/>
          
        </View>
  
        <View style={styles.card}>
          <View style={styles.EsquerdaCard}>
              <Image source={ImagemCard} style={styles.ImagemCard}/>
          </View>
          <View style={styles.direita}>

          <Text style={styles.cardTitle}>Como você se sente?</Text>
          <Text style={styles.cardSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <View style={styles.DivButtons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Encontre um médico</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image source={ArrowRight} /> 
            </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={styles.HeaderDoctors}>
        <Text style={styles.sectionTitle}>Médicos disponíveis</Text>
        <Text style={styles.subtitle}>Veja Todos</Text>
        </View>
          {Doutores.map((d,i)=> <Cards key={i} data={d}/>)}
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
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 8,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    Avatar: {
      width: 100,
      height: 50,
      borderRadius: 25,
    },
    EsquerdaCard:{
      width:'40%',
     
    },
    ImagemCard:{
      position:'absolute',
      top:'-1%',
      right:'5%',
      height:130,
      width:130
    },
    direita:{
      width:'60%',
    },
    card: {
      flexDirection:'row',
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
    DivButtons:{
      flexDirection:'row'
    },
    HeaderDoctors:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'95%'    
    },
    subtitle:{
      fontSize:13,
      fontWeight:'700',
      color:"#BCBCBC"
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
      backgroundColor: '#040404', // Cor do botão
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 12,
      marginRight: 5,
    }
   
});

export default HomeScreen;