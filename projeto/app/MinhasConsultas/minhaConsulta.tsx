import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, ViewBase, Modal, FlatList} from 'react-native';


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

const Doutores = [
  {
    id:1,
    name:"Dr. Fernando",
    Professional:"Psiquiatra",
    assessment: 4,
    address:"av quiteria oliveira lima 430 Ceara",
    horario:'12hrs'
  },
  {
    id:3,
    name:"Dr. Osvaldo",
    Professional:"Psiquiatra",
    assessment: 4,
    address:"av quiteria oliveira lima 430 Ceara",
    horario:'15hrs'
  }
]
type Horario = {
  hora: string;
  Agendado: boolean;
};

const MinhasConsultas = () => {
  const imagemDoutora = require('../../assets/images/Doctor-pana1.png');
  const CalendarioImg = require('../../assets/images/Calendario.png');
  const ImageDr = require('../../assets/images/Doctor-pana.png');
  const Avatar = require("../../assets/images/Avatar.png");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHora, setSelectedHora] = useState(null);
  const [selecteddata, setSelecteddata] = useState({});
  const [arrayDoutores, setarraydoutores] = useState(Doutores);

  const HandleReagendar = (data) => {
    setSelectedHora(data.horario);
    setSelecteddata(data);
    setIsModalVisible(true);
  };

  const HandleCancelar = (id) => {
    const filter = Doutores.filter(d => d.id !== id);
    setarraydoutores(filter);
  };

  const Reagedando = (horarioSelecionado) => {
    const updatedDoutores = arrayDoutores.map(d => {
      if (d.id === selecteddata.id) {
        return { ...d, horario: horarioSelecionado.hora };
      }
      return d;
    });
    setarraydoutores(updatedDoutores);
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedHora(null);
  };

  const HandleAgendar = () => {
    // Lógica para confirmar agendamento
    closeModal();
  };

  const renderDoctorCard = ({ item }) => (
    <View style={styles.Cardscontainer}>
      <View style={styles.Conteudo}>
        <View style={styles.esquerda}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.cardsubtitle}>{item.Professional}</Text>
          <Text style={styles.cardsubtitle}>{item.horario}</Text>
          <Text>{item.assessment}⭐</Text>
          <Text style={styles.p}>Endereço</Text>
          <View style={styles.divisor}></View>
          <Text style={styles.p}>{item.address}</Text>
        </View>
        <View style={styles.Carddireita}>
          <View style={styles.DivImg}>
            <Image source={ImageDr} />
          </View>
        </View>
      </View>
      <View style={styles.footerMinhasConsultas}>
        <TouchableOpacity style={styles.buttonReagendar} onPress={() => HandleReagendar(item)}>
          <Text style={styles.CardbuttonText}>Reagendar Consulta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancelar} onPress={() => HandleCancelar(item.id)}>
          <Text style={styles.CardbuttonText}>Cancelar Consulta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, Fulana Beltrana</Text>
        <Image source={Avatar} style={styles.Avatar} />
      </View>
      <View style={styles.HeaderDoctors}>
        <Text style={styles.sectionTitle}>Suas Consultas</Text>
        <Text style={styles.subtitle}>Veja Todos</Text>
      </View>
      <FlatList
        data={arrayDoutores}
        keyExtractor={(item) => item.id.toString()} // Assumindo que 'id' é numérico
        renderItem={renderDoctorCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={CalendarioImg} />
            <Text style={styles.TitleModal}>Confirmar Agendamento</Text>
            <Text style={styles.TitlesubModal}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
            <View style={styles.profissional}>
              <Image source={imagemDoutora} />
              <View style={styles.Descricao}>
                <Text style={styles.TitleModal}>{selecteddata?.name}</Text>
                <Text style={styles.TitlesubModal}>{selecteddata?.Professional}</Text>
                <Text style={styles.pModal}>
                  Data: {selecteddata?.dia} {selectedHora?.horario} Fuso horário: Brasília
                </Text>
                <Text style={styles.pModal}>{selecteddata?.address}</Text>
              </View>
            </View>
            <View style={styles.containerCarrsel}> 
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
              setSelectedHora(horario);
              Reagedando(horario, item);
            }
          }}
          disabled={horario.Agendado}
        >
          <Text
            style={[
              styles.horaText,
              horario.Agendado ? styles.horaAgendada : styles.horaDisponivel
            ]}
          >
            {horario.hora}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )}
  horizontal={true} // Ativa a rolagem horizontal
  showsHorizontalScrollIndicator={true} // Ativa o indicador de rolagem horizontal
  contentContainerStyle={styles.containerScroll} // Estilos para o conteúdo
  style={{ flexGrow: 1 }} // Para garantir que a FlatList use o espaço disponível
/>
</View>

            <TouchableOpacity style={styles.ConfirmButton} onPress={HandleAgendar}>
              <Text style={styles.txtConfirm}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CancelButton} onPress={closeModal}>
              <Text style={styles.txtCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    modalContainer: {
      width: "100%",
      backgroundColor: '#272626d0',
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',  
      
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 15,
      width: '90%',
      padding: 10,
      alignItems: 'center',
      overflow: 'hidden',
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
       width:200,
       padding: 10, 
      
       backgroundColor: '#FF725E', 
       borderRadius: 10,
       alignItems:'center',
     },
     txtConfirm:{
       color:'white',
     },
     CancelButton:{
       width:200,
       padding: 10, 
      
       borderRadius:10,
       alignItems:'center',
       marginTop:10,
     },
   txtCancel:{
       color:'Black',
   },



   
   Cardscontainer:{
    backgroundColor:"#fff",
    width:"90%",
    borderRadius:15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 'auto', // Isso não funciona diretamente em React Native
    marginVertical: 23,
    alignSelf: 'center',
    position:'relative'
},
Conteudo:{
    flex:1,
    flexDirection:'row',
    width:'100%',
    margin:'auto',
    justifyContent:"space-between",
    alignItems:'center',
    
},
esquerda:{
    padding:20,
    paddingBottom:55
},
title:{
    fontSize:20,
    fontWeight:'700'
    
},
cardsubtitle:{
    fontWeight:"400",
    fontSize:14
},
divisor:{
    height:.5,
    width:'100%',
    backgroundColor:'#000',
    borderRadius:15
},
p:{
    fontWeight:"300",
    fontSize:12
},
Carddireita:{
    backgroundColor:'#ff4',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    width:'30%',
    borderRadius:15,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    padding:20,
    paddingBottom:40
    
},
DivImg:{
    borderRadius:50,
    backgroundColor:'#fff',
    padding:10,
},
footerMinhasConsultas:{
    
    position:'absolute',
    top:"75%",
    right:'10%',
    gap:25,
    flexDirection:'row'
  

},

buttonReagendar:{
  padding:7,
  backgroundColor:"#FF725E",
  borderRadius:5,
  flex:1,
  shadowRadius: 4,
  width:150,
  height:40,
  alignItems:"center",
  justifyContent:"center",

},

buttonCancelar:{
  padding:7,
  backgroundColor:"#FFE",
  borderRadius:5,
  flex:1,
  shadowRadius: 4,
  width:150,
  height:40,
  alignItems:"center",
  justifyContent:"center",
},
CardbuttonText:{
  fontSize:15,
  color:'#000'
},
containerCarrsel:{
  width:'90%'
},
containerScroll: {
  paddingHorizontal: 10, // Adiciona espaço nas laterais
},
column: {
  // Ajuste a largura conforme necessário
  width: 150, // Largura fixa para cada coluna de dias
  marginHorizontal: 5,
  justifyContent: 'flex-start',
  alignItems: 'center', // Espaçamento entre os itens
},
horaContainer: {
  // Estilo para o contêiner do horário
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  marginVertical: 5,
},
dateText: {
  fontSize: 8,
  color: '#666',
  marginBottom: 10,
},

horaAgendada: {
  color: '#A6A6A6', // Estilo para horário agendado
},
horaDisponivel: {
  color: '#000', // Estilo para horário disponível
},
horaText: {
  fontSize: 12,
},
   
});

export default MinhasConsultas;