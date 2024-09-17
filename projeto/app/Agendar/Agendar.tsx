import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View ,Image, Text, StyleSheet, FlatList, Dimensions, ScrollView, Button, TouchableOpacity, SectionList, Modal} from "react-native"
import { RootStackParamList } from '../../types';
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones do FontAwesome
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<RootStackParamList>;
type AgendarRouteProp = RouteProp<RootStackParamList, 'Agendar'>;

const Mes = [
    {
        id:0,
        mes:"janeiro"
    },
    {
        id:1,
        mes:"fevereiro"
    },
    {
        id:2,
        mes:"março"
    },
    {
        id:3,
        mes:"abril"
    },
    {
        id:4,
        mes:"maio"
    },
    {
        id:5,
        mes:"junho"
    },
    {
        id:6,
        mes:"julho"
    },
    {
        id:7,
        mes:"agosto"
    },
    {
        id:8,
        mes:"setembro"
    },
    {
        id:9,
        mes:"outubro"
    },
    {
        id:10,
        mes:"novembro"
    },
    {
        id:11,
        mes:"dezembro"
    },
]
const diasDaSemana = [
    {
        id: '1',
        dia: 'Hoje',
        data: new Date().toLocaleDateString(),
        horarios: [
            { hora: '8:00', Agendado: false },
            { hora: '10:00', Agendado: true }
        ]
    },
    {
        id: '2',
        dia: 'Amanhã',
        data: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString(),
        horarios: [
            { hora: '8:00', Agendado: false },
            { hora: '10:00', Agendado: false }
        ]
    },
    {
        id: '3',
        dia: 'Quarta-feira',
        data: new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString(),
        horarios: [
            { hora: '8:00', Agendado: true },
            { hora: '10:00', Agendado: false }
        ]
    },
    { id: '4', dia: 'Quinta-feira', data: new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString(),
        horarios: [
        { hora: '8:00', Agendado: true },
        { hora: '10:00', Agendado: false }
        ] 
    },
    { id: '5', dia: 'Sexta-feira', data: new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString(),
        horarios: [
            { hora: '8:00', Agendado: false },
            { hora: '10:00', Agendado: true }
        ]
    },
  ];
  type Horario = {
    hora: string;
    Agendado: boolean;
  };
  
const Agendar = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedHora, setSelectedHora] = useState<Horario | null>(null);
    const [selecteddata, setSelecteddata] = useState(null);
    const navigation = useNavigation<NavigationProp>();

    const handleNextMonth = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Mes.length);
    };

    const handlePrevMonth = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Mes.length) % Mes.length);
    };
    
    const openModal = (hora,data) => {
        setSelectedHora(hora); // Armazena o horário selecionado
        setSelecteddata(data);
        setIsModalVisible(true); // Abre o modal
    };
    const closeModal = () => {
        setIsModalVisible(false); // Fecha o modal
        setSelectedHora(null); // Reseta o horário selecionado
    };
    const  HandleAgendar = (doctor:any)=>{
        navigation.navigate("Consultar")
    }
    
    const route = useRoute<AgendarRouteProp>();
    const {doctor} = route.params;
    
    const imagemDoutora = require('../../assets/images/Doctor-pana1.png')
    const CalendarioImg = require('../../assets/images/Calendario.png')

   
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.BackgroundImg}>
                    <Image source={imagemDoutora} />

                </View>
                <Text style={styles.subtitle}>{doctor.Professional}</Text>
                <Text style={styles.title}>{doctor.name}</Text>
            </View>
            <View style={styles.Sobre}>
            <Text style={styles.title}>Sobre</Text>
            <Text style={styles.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae cursus libero, vitae dapibus odio. </Text>
            </View>
            <View style={styles.Agendamento}>
                <View style={styles.HeaderAgendamento}>
                <Text style={styles.titleAgenda}>Agenda</Text>
                <View style={styles.item}>
                    <TouchableOpacity onPress={handlePrevMonth} style={styles.arrowButton}>
                        <FontAwesome name="chevron-left" size={15} color="#373737" />
                    </TouchableOpacity>
                        <Text style={styles.itemText}>{Mes[currentIndex].mes}</Text>
                    <TouchableOpacity onPress={handleNextMonth} style={styles.arrowButton}>
                        <FontAwesome name="chevron-right" size={15} color="#373737" />
                    </TouchableOpacity>
                </View>
               
                </View>
                
                <FlatList
                    data={diasDaSemana}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.column}>
                          <Text style={styles.headerText}>{item.dia}</Text>
                          <Text style={styles.dateText}>{item.data}</Text>
                          {item.horarios.map((horario, index) => (
                            <TouchableOpacity
                              key={index}
                              style={styles.horaContainer}
                              onPress={() => {
                                if (!horario.Agendado) {
                                  openModal(horario,item); // Abre o modal apenas se não estiver agendado

                                }
                              }}
                              disabled={horario.Agendado} // Abre o modal com o horário selecionado
                            >
                               <Text style={[styles.horaText, horario.Agendado ? styles.horaAgendada : styles.horaDisponivel]} >{horario.hora}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={styles.containerScroll}
                    />

                
            </View>
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
                    <TouchableOpacity onPress={HandleAgendar}>
                        <Text>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={closeModal}>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                    
                </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{

    },
    header:{
        width:'100%',
        alignItems:'center',
        marginTop:20

    },
    BackgroundImg:{
        backgroundColor:"#C8DEFB",
        borderRadius:100,
        padding:10
    },
    title:{
        fontSize:20,
        fontWeight:'700',
        
    },
    subtitle:{
        fontSize:16,
        fontWeight:'500'
    },
    Sobre:{
        width:'90%',
        margin:'auto',
        marginTop:20
    },
    Description:{
        fontSize:14,
        fontWeight:'400',
        color:"#8E8E8E",
        marginTop:20,
        
    },
    titleAgenda:{
        fontSize:20,
        fontWeight:'700',
        marginRight:20
    },
    Agendamento:{
       
        width:'90%',
        margin:'auto',
        marginTop:20,
        
    },
    HeaderAgendamento:{
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowButton:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width:'78%'
      },
      itemText:{
        fontSize:15,
        fontWeight:'500',
        marginLeft:15,
        marginRight:15
      },

      containerScroll: {
        
        marginTop:30
      },
      column: {
        width: 90, // Largura fixa para cada coluna de dias
        marginHorizontal: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      dateText: {
        fontSize: 8,
        color: '#666',
        marginBottom: 10,
      },
      horaContainer: {
        marginBottom: 5,
      },
      horaAgendada: {
        color: '#A6A6A6', // Estilo para horário agendado (rosa claro, por exemplo)
      },
      horaDisponivel: {
        color: '#000', // Estilo para horário disponível (azul claro, por exemplo)
      },
      horaText: {
        fontSize: 12,
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
    
})
export default Agendar;