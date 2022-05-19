import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Headline, Button } from "react-native-paper";
import globalStyles from "../Styles/global";

const newClient = () => {

    //Campos Formulario

    const [nombre, guardarNombre] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [empresa, guardarEmpresa] = useState('');


    return ( 
        <View style={globalStyles.container}>

            <Headline style={globalStyles.title}>Añadir Nuevo Cliente</Headline>

            <TextInput 
                label='Nombre'
                placeholder="Daniel"
                onChangeText={ texto => guardarNombre(texto) }
                value= {nombre}
                style={styles.input}
            />
            <TextInput 
                label='Teléfono'
                placeholder="654321987"
                onChangeText={ texto => guardarTelefono(texto) }
                value= {telefono}
                style={styles.input}
            />
            <TextInput 
                label='Correo'
                placeholder="correo@correo.com"
                onChangeText={ texto => guardarCorreo(texto) }
                value= {correo}
                style={styles.input}
            />
            <TextInput 
                label='Empresa'
                placeholder="Daniel SL."
                onChangeText={ texto => guardarEmpresa(texto) }
                value= {empresa}
                style={styles.input}
            />
            
        </View>
     );
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})

export default newClient;