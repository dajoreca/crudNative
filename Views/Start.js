import axios from "axios";
import React, {useEffect, useState} from "react";
import { Text, FlatList, View } from "react-native";
import { List, Headline, Button, FAB } from "react-native-paper";
import globalStyles from "../Styles/global";

const Start = ({navigation}) => {

    //state de la APP

    const [ clientes, guardarClientes ] = useState([]);
    const [ consultarAPI, guardarConsultarAPI ] = useState(true);

    useEffect(() => {
        const obtenerClienteApi = async () => {
            try {
                const resultado = await axios.get ('http://localhost:3000/clientes');
                guardarClientes(resultado.data)
                guardarConsultarAPI(false);

            } catch (error) {
                console.log(error)
            }
        }
        if(consultarAPI) {
            obtenerClienteApi();

        }

    }, [consultarAPI]);
    return ( 
        <View style={globalStyles.container}>

            <Button icon="plus-circle" onPress={() => navigation.navigate('newClient', { guardarConsultarAPI }) }>
                Nuevo Cliente
            </Button>    
            <Headline style={globalStyles.title}>{ clientes.length > 0 ? "Clientes" : "Aún no hay clientes" } </Headline>

            <FlatList 
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString() }
                renderItem={ ({item}) => (  //funcion que haces que se vea el componente
                    <List.Item
                        title={item.nombre} 
                        description={item.empresa}
                        onPress={ () => navigation.navigate('clientDetails', { item, guardarConsultarAPI }) }
                    />
                )} 
            />
            <FAB 
                icon='plus'
                style={globalStyles.fab}
                onPress={() => navigation.navigate('newClient', { guardarConsultarAPI }) }
            />
        </View>
     );
}
 

export default Start;