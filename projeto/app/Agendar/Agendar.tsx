import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View ,Image, Text, StyleSheet} from "react-native"
import { RootStackParamList } from '../../types';

type AgendarRouteProp = RouteProp<RootStackParamList, 'Agendar'>;

const Agendar = ()=>{
    const route = useRoute<AgendarRouteProp>();
    const {doctor} = route.params;
    
    const imagemDoutora = require('../../assets/images/Doctor-pana1.png')
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
            <View>

            </View>
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
    
})
export default Agendar;