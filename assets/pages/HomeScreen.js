import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');

  const handleAboutClick = () => {
    navigation.navigate('About', { name: name });
    //navigation.navigate('About', {cor: name})
  };
   const handleAboutClick2 = () => {
    navigation.navigate('Contato', { name: name });
    //navigation.navigate('About', {cor: name})
  };

   const handleAboutClick3 = () => {
    navigation.navigate('Projetos', { name: name });
    //navigation.navigate('About', {cor: name})
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textUltimosProjetos}>Últimos projetos.</Text>
      <ScrollView
        showsVerticalScrollIndicator={false} style={styles.containerProjects}
       >
        <View>
          <Image
            source={require('../images/nubank.PNG')}
            style={styles.imagemProjeto}
          />

          <Text style={styles.tituloProjeto}>Nubank</Text>
        </View>

        <View>
          <Image
            source={require('../images/Capturar1.PNG')}
            style={styles.imagemProjeto}
          />

          <Text style={styles.tituloProjeto}>Viagem a Fernando de Noronha</Text>
        </View>

      </ScrollView>

      <View style={styles.nav}>

        <TouchableOpacity activeOpacity={0.3}>
          <Image source={require('../images/icons8-home-64.png')} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.3}  onPress={handleAboutClick}>
          <Image source={require('../images/icons8-contact-64.png')} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.3} onPress={handleAboutClick3}>
          <Image source={require('../images/icons8-mobile-64.png')}  />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.3} onPress={handleAboutClick2}>
          <Image source={require('../images/icons8-email-64.png')} />
        </TouchableOpacity>
       
       
       
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
  },

  textUltimosProjetos: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  imagemProjeto: {
    width: 300,
    height: 500,
  },
  containerProjects: {
   
  },

  tituloProjeto: {
    fontSize: 20,
    margin: 10,
  },

  nav: {
    flexDirection: 'row',
    margin: 'auto',
    gap: 10,
  


  },
});



