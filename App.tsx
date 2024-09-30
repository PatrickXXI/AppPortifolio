import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function Portifolio ({navigation}){
  return(
    <View style={styles.container}>
      <Image
      source={require('./assets/eu.jpg')}
      style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://www.instagram.com/')}>
       
        <Text style={styles.textButton}><Icon name="instagram" size={20} color="white" alignItems='center'/> Instagram </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit')}>
        <Text style={styles.textButton}><Icon name="linkedin" size={20} color="white" /> Linkedin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('mailto:patrick2319@gmail.com')}>
        <Text style={styles.textButton}><Icon name="envelope" size={20} color="white" /> E-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://github.com/PatrickXXI')}>
        <Text style={styles.textButton}><Icon name="github" size={20} color="white" /> GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Skills')}>
        <Text style={styles.textButton}> <Icon name="star" size={20} color="white"/> Skills</Text>
      </TouchableOpacity>

    </View>
  );
}

function Skills ({navigation}){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.goBack('Portifolio')}>
      <Image 
        source={require('./assets/eu.jpg')}
        style={styles.image}
        />
      </TouchableOpacity>
      <View style={{flex:1, alignItems:'flex-start'}}>
        <Text style={styles.skills}>HTML <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> </Text>
        <Text style={styles.skills}>CSS <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>React Native <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>Java Script <Icon name="star" size={16} color="gold"/> </Text>
        <Text style={styles.skills}>PHP <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>Java <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
        <Text style={styles.skills}>Futebol <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/> <Icon name="star" size={16} color="gold"/></Text>
      
      <TouchableOpacity style={styles.buttonSkill} onPress={()=> Linking.openURL('https://wa.me/<5543998659862>')}>
        <Text style={styles.textButton}>Fale comigo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSkill} onPress={()=> navigation.navigate('Portifolio')}>
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#fb8500',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '100%', // Definindo a largura do botão
    maxWidth: 200, // Largura máxima para manter a aparência consistente
    alignItems: 'center', // Centralizando o texto
  },
  buttonSkill:{
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: 200, // Definindo a largura do botão
   
    alignItems: 'center', // Centralizando o texto
  },
  textButton: {
    color: 'white', // Cor do texto
    fontSize: 16, // Tamanho do texto
  },
  image: {
    width: 150, // Largura da imagem
    height: 150, // Altura da imagem
    borderRadius: 60, // Tornar a imagem circular
    marginBottom: 60,
  },
  skills:{
    marginVertical:10,
    fontSize:20,
    color:'white',
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Portifolio'>
        <Stack.Screen name="Portifolio" component={Portifolio}/>
        <Stack.Screen name="Skills" component={Skills}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
