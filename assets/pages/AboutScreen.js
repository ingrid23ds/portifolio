import * as React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView,Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;

  const handleHomeClick = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sobre}>
        <Image
          source={require('../images/user.png')}
          style={styles.imagemUser}
        />

        <Text style={styles.nameUser}>Ingrid Oliveira</Text>

        <Text style={styles.deacricaoUser}>Estudante de Desenvolvimento de sistemas.</Text>
        <Text style={styles.deacricaoUser}>Cursando 3º ano Sou esforçada.</Text>



        <View style={styles.areaRedes}>
               <Image
          source={require('../images/instagram-icone.png')}
          style={styles.redeSocial}
        />

              <Image
          source={require('../images/linkedln.png')}
          style={styles.redeSocial}
        />

        
              <Image
          source={require('../images/github-icon-svg-27.jpg')}
          style={styles.redeSocial}
        />
      </View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sobre: {
    padding: 20,
  
  },

  imagemUser: {
   width:150,
   height:150,
   marginBottom: 15,
   marginTop: 30,
   margin: 'auto',
   borderRadius: '50%'
  
  },

  redeSocial: {
    width: 50,
    height: 50
  },
 areaRedes: {
   flexDirection:'row',
   margin: 20,
   gap: 10
 },
  nameUser: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical:10,
    textAlign:'center'
  },

  deacricaoUser: {
   
  }
});
