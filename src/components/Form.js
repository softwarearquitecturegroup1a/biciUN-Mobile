import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Form extends React.Component {

  home() {
    Actions.home();  
  } 

	render(){
		return(
			<View style={styles.container}>
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Usuario'
          placeholderTextColor='#FFFFFF'
          selectionColor="#fff"
          onSubmitEditing={()=> this.contraseña.focus()}
        />

        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Contraseña'
          selectionColor="#fff"
          secureTextEntry={true}
          placeholderTextColor= '#FFFFFF'
          ref={(input)=>this.contraseña = input}
        />

        <TouchableOpacity onPress={this.home} style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
			</View>	
		)
	}

  /* 
    <Text style={styles.buttonText} onPress={(this.onLogin.bind(this))}>Ingresar</Text>
  */ 

  /*
  onLogin() {
    console.log("Boton ingresar presionado");
    Alert.alert(
      'Login',
      'Datos incorrectos, intente de nuevo.',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        }
      ]
    )
    
  }
  */

  aceptar() {
    console.log("Login Incorrecto");
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#FFFFFF',
    marginVertical: 8,
  },
  button: {
    width: 300,
    backgroundColor: '#00227b',
    borderRadius: 8,
    marginVertical: 8,
    paddingVertical: 6,

  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  }
});
