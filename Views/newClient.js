import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from "react-native-paper";
import globalStyles from "../Styles/global";

const newClient = () => {

    //Campos Formulario

    const [nombre, guardarNombre] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [empresa, guardarEmpresa] = useState('');
    const [alerta, guardarAlerta] = useState(false);

    //Almacena el cliente en la base de datos
        const guardarCliente = () => {
            //validar
            if (nombre === '' || telefono === ''|| correo === '' || empresa === '') {
                guardarAlerta(true)
                return;
            }
            //generar el cliente
            const cliente = {nombre, telefono, empresa, correo};
            console.log(cliente)

            //guardar el cliente en la API

            //redireccionar

            //limpiar el formulario


        }

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
            <Button icon='pencil-circle' mode='contained' onPress={() => guardarCliente()}>
                Guardar Cliente
            </Button>
            <Portal>
                <Dialog
                    visible={alerta}
                    onDismiss={ () => guardarAlerta(false) }
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={ () => guardarAlerta(false) }>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            
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