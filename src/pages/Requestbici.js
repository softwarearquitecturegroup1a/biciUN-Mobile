// Importaciones
import React from 'react';
import { StyleSheet, Text, View, Picker} from 'react-native';
import Request_icon from '../components/Request_icon';

import Button from 'react-native-button';
// import PickerRequest from '../components/PickerRequest';
export default class Requestbici extends React.Component {

  constructor(props, context) {
    super(props, context);
      this.state = {
        estacion_origen:"Uriel",
        estacion_destino:"CyT",
        isDisabled: false,
        user: 105426021
      }
  }

  _handlePress() {
    this.requestbici();
    console.log('Boton Solicitar, funcionando');    
  }  
  
  requestbici(){

  }


  render() {
    const { isDisabled } = this.state;
    return (
      
    <View style={styles.container}>
      <Request_icon/>
      <Text style={styles.text}>Seleccione su Estación de Inicio</Text>
      <Picker 
        selectedValue={this.state.estacion_origen}

        style={styles.picker}
        underlineColorAndroid='rgba(0,0,0,0)'
        onValueChange={(itemValue, itemIndex) => this.setState({estacion_origen: itemValue})} 
        >
        <Picker.Item label="Central" value="Central" />
        <Picker.Item label="Uriel" value="Uriel" />
        <Picker.Item label="CyT" value="CyT" />
        <Picker.Item label="Estadio" value="Estadio" />
        <Picker.Item label="Capilla" value="Capilla" />
        <Picker.Item label="Humanas" value="Humanas" />
      </Picker>

      <Text style={styles.text}>Seleccione su Estación de Destino</Text>
      <Picker
        selectedValue={this.state.estacion_destino}
        style={ styles.picker}
        onValueChange={(itemValue, itemIndex) => this.setState({estacion_destino: itemValue})}
        >
        <Picker.Item label="Central" value="Central" />
        <Picker.Item label="Uriel" value="Uriel" />
        <Picker.Item label="CyT" value="CyT" />
        <Picker.Item label="Estadio" value="Estadio" />
        <Picker.Item label="Capilla" value="Capilla" />
        <Picker.Item label="Humanas" value="Humanas" />
      </Picker>
      <Text></Text>
      <Button
        style={{ flex: 3,fontSize: 18, color: 'white' }}
        styleDisabled={{ color: 'white' }}
        disabled={isDisabled}
        containerStyle={{ padding: 8, height: 45, width: 150, overflow: 'hidden', borderRadius: 10, 
          borderWidth: 1, borderColor: '#fff', backgroundColor: '#06A800' }}
        disabledContainerStyle={{ backgroundColor: '#db143f' }}
        onPress={() => this._handlePress()}
        >Solicitar Bici
      </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#3949ab",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center", 
  },

  text: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 8,
  },
  picker:{
    height: 30,
    width:300,
    color:'#fff',
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#fff', 
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    textAlign:"center"
  }
});