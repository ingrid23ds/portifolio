import * as React from 'react'
import { View, Text, StyleSheet, Button,SafeAreaView,TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function ContatosScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
       
      <View style={styles.formulario}>
      <Text style={styles.textsForm}>Nome:</Text>
 <TextInput
                placeholder="Digite seu nome"
                placeholderTextColor="#B2ADAD"
                style={styles.input}
                
                
              />
   



      <Text style={styles.textsForm}>Sobrenome:</Text>
       <TextInput
                placeholder="Digite seu Sobrenome"
                placeholderTextColor="#B2ADAD"
                style={styles.input}
                
                
              />
   
      <Text style={styles.textsForm}>Assunto:</Text>
       <TextInput
                placeholder="Digite o assunto"
                placeholderTextColor="#B2ADAD"
                style={styles.input}
                
                
              />
   
      <Text style={styles.textsForm}>Mensagem:</Text>
       <TextInput
                placeholder="Digite o conteudo aqui"
                placeholderTextColor="#B2ADAD"
                style={styles.inputMensagem}
                
                
              />
   
      </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formulario: {
     padding: 20,
 
  },

  textsForm: {
    
    fontSize: 20,
    marginVertical: 10
  },

  input: {
    backgroundColor: '#E4E4E4',
    padding: 10
  },

  inputMensagem: {
       backgroundColor: '#E4E4E4',
       textAlign: 'center',
    height: 200
  }
})