import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, ViewBase, Modal} from 'react-native';
import { Cards } from '../../component/cards';


const Doutores = [
  {
    id:1,
    name:"Dr. Fernando",
    Professional:"Psiquiatra",
    assessment: 4,
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
type Horario = {
  hora: string;
  Agendado: boolean;
};

const MinhasConsultas = () =>{
  const imagemDoutora = require('../../assets/images/Doctor-pana1.png')
  const CalendarioImg = require('../../assets/images/Calendario.png')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHora, setSelectedHora] = useState<Horario | null>(null);
  const [selecteddata, setSelecteddata] = useState(null);
  const openModal = (hora,data) => {
    setSelectedHora(hora); // Armazena o horário selecionado
    setSelecteddata(data);
    setIsModalVisible(true); // Abre o modal
};
const closeModal = () => {
    setIsModalVisible(false); // Fecha o modal
    setSelectedHora(null); // Reseta o horário selecionado
};
    const Avatar = require("../../assets/images/Avatar.png")
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Olá,
            Fulana Beltrana
            </Text>
          <Image source={Avatar} style={styles.Avatar}/>
          
        </View>
        <View style={styles.HeaderDoctors}>
        <Text style={styles.sectionTitle}>Suas Consultas</Text>
        <Text style={styles.subtitle}>Veja Todos</Text>
        </View>
          {Doutores.map((d,i)=> <Cards key={i} minhasConsultas={true} data={d}/>)}
        {/* Repetir o TouchableOpacity para outros médicos */}
        <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Image source={CalendarioImg}/>
                    <Text style={styles.TitleModal}>
                    Confirmar Agendamento
                    </Text>
                    <Text style={styles.TitlesubModal}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                    <View style={styles.profissional}>
                        <Image source={imagemDoutora} />
                        <View style={styles.Descricao}>
                            <Text style={styles.TitleModal}>{doctor.name}</Text>
                            <Text style={styles.TitlesubModal}>{doctor.Professional}</Text>
                            <Text style={styles.pModal}>Data: {selecteddata?.dia} {selecteddata?.data} {selectedHora?.hora} Fuso horário: Brasília</Text>
                            <Text style={styles.pModal}>{selecteddata?.address}</Text>
                        </View>
                    </View>
                  
                    {/* Adicione botões e campos de agendamento aqui */}
                    <TouchableOpacity style={styles.ConfirmButton} onPress={HandleAgendar}>
                        <Text style={styles.txtConfirm}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CancelButton} onPress={closeModal}>
                        <Text style={styles.txtCancel}>Cancelar</Text>
                    </TouchableOpacity>
                    
                </View>
                </View>
            </Modal>
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
      height: 100,
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
    },
    modalContainer:{
      backgroundColor:'#272626d0',
      height:"100%",
     },
     modalContent:{
       backgroundColor:'#fff',
       borderRadius:15,
       marginTop:60,
       width:'90%',
       margin:"auto",
       alignItems:"center",
       padding:10
     },
     modalText:{

     },
     TitleModal:{
       fontWeight:'700',
       fontSize:18,
     },
     TitlesubModal:{
       fontWeight:'500',
       fontSize:15,
     },
     profissional:{
       marginTop:20,
       flexDirection:'row',
       alignItems:'center',
       marginBottom:20
     },
     Descricao:{
       width:'50%'
     },
     pModal:{
       fontWeight:'300',
       fontSize:12,
     },
     ConfirmButton:{
       width:'200px',
       padding: '10px', 
       border: '2px solid black',
       backgroundColor: '#FF725E', 
       borderRadius: '10px',
       alignItems:'center',
     },
     txtConfirm:{
       color:'white',
     },
     CancelButton:{
       width:'200px',
       padding: '10px', 
       border: '2px solid black',
       borderRadius:'10px',
       alignItems:'center',
       marginTop:'10px',
     },
   txtCancel:{
       color:'Black',
   },
   
});

export default MinhasConsultas;