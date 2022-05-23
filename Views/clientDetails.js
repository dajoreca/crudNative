import React from "react";
import { View, StyleSheet, Alert } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from "axios";

const clientDetails = ({navigation, route}) => {

    const { guardarConsultarAPI } = route.params

    const { nombre, telefono, correo, empresa, id} = route.params.item;
    

    //Lo dejo comentado, ya que en expo web no funciona bien Alert.

    //const mostrarConfirmacion = () => {
        //Alert.alert(
            //'¿Deseas eliminar el mensaje?',
            //'Un contacto eliminado no se puede recuperar',
            //[
                //{ text: 'Si, Eliminar', onPress: () => eliminarContacto() },
                //{ text: 'Cancelar', style:'cancel'}
            //]
        //)
    //}
    
    const eliminarContacto = async () => {
        const url = `http://localhost:3000/clientes/${id}`
        console.log(url)
        try {
            await axios.delete(url)
        } catch (error) {
            console.log(error)
        }

        //redireccionar
        navigation.navigate('Start');
        
        //volver a consultar la API

        guardarConsultarAPI(true);
    }

    return ( 
        <View style={globalStyles.container}>
            <Headline style={globalStyles.title}> {nombre} </Headline>
            <Text styles={styles.texto}>Empresa: <Subheading>{empresa}</Subheading> </Text>
            <Text styles={styles.texto}>Correo: <Subheading>{correo}</Subheading> </Text>
            <Text styles={styles.texto}>Teléfono: <Subheading>{telefono}</Subheading> </Text>

            <Button 
                style={styles.boton}
                mode='contained' 
                icon='cancel'
                onPress={() => eliminarContacto() } 
                //onPress={() => mostrarConfirmacion() }
                     //para llevar a alerta, como no funciona en expo web, directamente elimino
            >
                Eliminar Cliente
            </Button>
            <FAB 
                icon='pencil'
                style={globalStyles.fab}
                onPress={() => navigation.navigate('newClient', { cliente: route.params.item, guardarConsultarAPI }) }
            />

        </View>
        
     );
}
 const styles = StyleSheet.create({
     texto: {
         marginBottom: 20,
         fontSize: 18
     },
     boton:{
         marginTop:100,
         backgroundColor: 'red'
     }
 })
export default clientDetails;