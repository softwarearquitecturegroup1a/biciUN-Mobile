// Importaciones
import React from 'react';
import { StyleSheet, Text, View, Picker} from 'react-native';

import Button from 'react-native-button';
// import PickerRequest from '../components/PickerRequest';
export default class Requestbici extends React.Component {

  constructor(props, context) {
    super(props, context);
      this.state = {
        estacion_origen:"CyT",
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
      <Text style={styles.text}>Seleccione Estación Origen</Text>
      <Picker 
        selectedValue={this.state.estacion_origen}
        style={{ height: 50, width: 120, color:'#fff' }}
        onValueChange={(itemValue, itemIndex) => this.setState({estacion_origen: itemValue})} 
        >
        <Picker.Item label="Central" value="Central" />
        <Picker.Item label="Uriel" value="Uriel" />
        <Picker.Item label="CyT" value="CyT" />
        <Picker.Item label="Estadio" value="Estadio" />
        <Picker.Item label="Capilla" value="Capilla" />
        <Picker.Item label="Humanas" value="Humanas" />
      </Picker>

      <Text style={styles.text}>Seleccione Estación Destino</Text>
      <Picker
        selectedValue={this.state.estacion_destino}
        style={{ height: 50, width: 120, color:'#fff' }}
        onValueChange={(itemValue, itemIndex) => this.setState({estacion_destino: itemValue})}
        >
        <Picker.Item label="Central" value="Central" />
        <Picker.Item label="Uriel" value="Uriel" />
        <Picker.Item label="CyT" value="CyT" />
        <Picker.Item label="Estadio" value="Estadio" />
        <Picker.Item label="Capilla" value="Capilla" />
        <Picker.Item label="Humanas" value="Humanas" />
      </Picker>
      
      <Button
        style={{ fontSize: 20, color: 'white' }}
        styleDisabled={{ color: 'white' }}
        disabled={isDisabled}
        containerStyle={{ padding: 8, height: 45, width: 380, overflow: 'hidden', borderRadius: 10, 
          borderWidth: 1, borderColor: '#fff', backgroundColor: '#06A800' }}
        disabledContainerStyle={{ backgroundColor: '#db143f' }}
        onPress={() => this._handlePress()}
        >Solicitar
      </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#3949ab",
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
  },

  text: {
    color: "#fff",
    fontSize: 22,
    marginVertical: 20,
  },
  picker:{
    color: "#fff"
  }
});