import axios from "axios";
import React, {useEffect, useState} from "react";
import { Text, FlatList, View } from "react-native";
import { List } from "react-native-paper";

const Start = () => {

    //state de la APP
    const [ clientes, guardarClientes ] = useState([]);

    useEffect(() => {
        const obtenerClienteApi = async () => {
            try {
                const resultado = await axios.get ('http://localhost:3000/clientes');
                guardarClientes(resultado.data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClienteApi();
    }, []);
    return ( 
        <View>

            <FlatList 
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString() }
                renderItem={ ({item}) => (  //funcion que haces que se vea el componente
                    <List.Item
                        title={item.nombre} 
                        description={item.empresa}
                    />
                )} 
            />
        </View>
     );
}
 
export default Start;