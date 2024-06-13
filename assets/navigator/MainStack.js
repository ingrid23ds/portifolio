import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import ContatosScreen from '../pages/ContatosScreen';
import ProjetosScreen from '../pages/ProjetosScreen';

const MainStack = createNativeStackNavigator();
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          headerTitleAlign: 'center',

          headerStyle: {
            backgroundColor: '#836FFF',
            height: 70,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />

      <MainStack.Screen
        name="About"
        component={AboutScreen}
        options={({ route }) => ({
          title: 'Sobre',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#836FFF',
            height: 70,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        })}
      />

      <MainStack.Screen
        name="Contato"
        component={ContatosScreen}
        options={({ route }) => ({
          title: 'Contato',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#836FFF',
            height: 70,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        })}
      />

      <MainStack.Screen
        name="Projetos"
        component={ProjetosScreen}
        options={({ route }) => ({
          title: 'Projetos',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#836FFF',
            height: 70,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
        })}
      />
    </MainStack.Navigator>
  );
};
