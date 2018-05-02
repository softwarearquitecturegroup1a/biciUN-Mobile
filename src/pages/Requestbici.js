// Importaciones
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Button from 'react-native-button';
import PickerRequest from '../components/PickerRequest';
export default class Requestbici extends React.Component {



  constructor(props, context) {
    super(props, context);
      this.state = {
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
    return (
      
    <View style={styles.container}>
      <PickerRequest/>
      
      <PickerRequest/>
      
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
    color: "#ede7f6",
    fontSize: 25,
    marginVertical: 20,
  }
});