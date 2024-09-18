import React from "react"
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../types";


type NavigationProp = StackNavigationProp<RootStackParamList>;

interface CardProps {
    data: {
      name: string;
      Professional: string;
      assessment: string;
      address: string;
    };
  }

export const Cards: React.FC<CardProps> = ({data})=>{
    const navigation = useNavigation<NavigationProp>();

    const  HandleAgendar = (doctor:any)=>{
        navigation.navigate("Agendar",{doctor})
    }
    const ImageDr = require('../../assets/images/Doctor-pana.png')
    return(
        <View style={styles.container}>
            
            <View style={styles.Conteudo}>
                <View style={styles.esquerda}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.subtitle}>{data.Professional}</Text>
                    <Text >{data.assessment}⭐</Text>
                    <Text style={styles.p}>Endereço</Text>
                    <View style={styles.divisor}></View>
                    <Text style={styles.p}>{data.address}</Text>
                </View>
                <View  style={styles.direita}>
                    <View style={styles.DivImg}>
                    <Image  source={ImageDr} />
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => HandleAgendar(data)}>
                <Text style={styles.buttonText}>Agendar Consulta</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
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
    subtitle:{
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
    direita:{
        backgroundColor:,
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
    footer:{
        
        position:'absolute',
       
        top:"75%",
        right:'15%',
        
      

    },
    button:{
        padding:7,
        backgroundColor:"#FFE653",
        borderRadius:5,
        flex:1,
        width:200,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        
    },

    buttonText:{
        fontFamily:'arial',
        fontSize:20,
        color:'#000'
    }

})