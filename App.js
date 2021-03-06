import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Start from './Views/Start';
import newClient from './Views/newClient';
import clientDetails from './Views/clientDetails';
import BarraSuperior from './Components/UI/Barra';


const Stack = createStackNavigator()

//definir Theme

const theme = {
  ...DefaultTheme,
  //Si quieres cambiar el color o cualquier estilo por defecto de DefaultTheme, lo siguiente
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2', //Azul, por defecto es morado
    accent: '#0655BF'
  }
}



const App = () => {
  return ( 
    <>
      <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Start'
              screenOptions={{
                headerTitleAlign: 'center',
                headerStyle:{
                  backgroundColor: theme.colors.primary
                },
                headerTintColor: theme.colors.surface,
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}  

            >
                <Stack.Screen
                  name='Start'
                  component={Start}
                  options={ ({navigation, route}) => ({
                  //  headerLeft: (props) =>   <BarraSuperior {...props} 
                  //                          navigation={navigation}
                  //                          route={route}
                  //                      />
                                          
                  })}
                />
                <Stack.Screen
                  name='newClient'
                  component={newClient}
                  options={{
                    title: 'New Client'
                  }}
                />
                <Stack.Screen
                  name='clientDetails'
                  component={clientDetails}
                  options={{
                    title: 'Client Details'
                  }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
   );
}
 

const styles = StyleSheet.create({
  container: {
    
  },
});

export default App;

