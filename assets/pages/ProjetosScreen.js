import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';

export default function ProjetosScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;

  const handleHomeClick = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.projetos}>
          <View>
            <Image
              source={require('../images/nubank.PNG')}
              style={styles.imagemProjeto}
            />

            <Text style={styles.tituloProjeto}>Nubank</Text>
            <Text style={styles.descricaoProjeto}>
              Aplicativo de conta de banco, acesso atraves de email e senha.
            </Text>
            

            <TouchableOpacity style={styles.button} >
              <Text
                style={{  fontSize: 16, fontWeight: 'bold' }}
                onPress={() =>
                  Linking.openURL(
                    'https://github.com/ingrid23ds/login-Nubank-'
                  )
                }>
                <Text style={styles.buttonText}>Acessar</Text>
              </Text>
            </TouchableOpacity>




          </View>

          <View>
            <Image
              source={require('../images/Capturar1.PNG')}
              style={styles.imagemProjeto}
            />

            <Text style={styles.tituloProjeto}>Viagem a Fernando de Noronha</Text>
            <Text style={styles.descricaoProjeto}>
             Vantagens para ir a Fernando de Noronha 
            </Text>
            

            <TouchableOpacity style={styles.button} >
              <Text
                style={{  fontSize: 16, fontWeight: 'bold' }}
                onPress={() =>
                  Linking.openURL(
                    'https://github.com/ingrid23ds/viagem-a-fernando-de-noronha'
                  )
                }>
                <Text style={styles.buttonText}>Acessar</Text>
              </Text>
            </TouchableOpacity>




          </View>

          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  projetos: {
    padding: 20,
  },

  imagemProjeto: {
    width: 300,
    height: 500,
  },

  tituloProjeto: {
    fontSize: 20,
    margin: 10,
  },

  descricaoProjeto: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

  button: {

    margin: 'auto',
    marginBottom: 100
  },
  buttonText: {
    color: '#8F48D7',
    flexDirection: 'row',
    textAlign: 'center',
 
   
  },
});
