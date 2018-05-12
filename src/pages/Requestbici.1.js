// Importaciones
import React from 'react';
import { StyleSheet, Text, View, Picker, Alert, AsyncStorage} from 'react-native';
import Request_icon from '../components/Request_icon';
import graphql from '../utils/graphQLUtils';
import Button from 'react-native-button';

export default class Requestbici extends React.Component {

  constructor(props, context) {
    super(props, context);
      this.state = {
        estacion_origen:"CyT",
        estacion_destino:"Uriel",
        isDisabled: false,
        user: 105426021,
        origenError: '',
        finalError: '',
        bicicletasOrigen: null
      }

    var requestget = `
    {
      estacionByName(token: "${this.props.user}", name: "${this.state.origen}"){
        serial
        marca
        estado
      }
    }`;

    graphql(requestget,
      data => {
        var msg;
        if (!data.estacionByName) {
          msg = "No hay bicicletas disponibles en esta estación"
        }

        var bicisDisponibles = []
        data.estacionByName.forEach(bici => {
          if (bici.estado === "Disponible") {
            bicisDisponibles.push(bici)
          }
        } 
        )

        if (bicisDisponibles.length < 1) {
          msg = "No hay Bicis disponibles en esta estación"
        }

        this.setState({origenError: msg, bicicletasOrigen: bicisDisponibles})  
      }
    );
  }

   _handlePressR(event) {
     //this.requestbici();
     console.log('Boton Solicitar bici, funcionando');  
    //    console.log("paso "+bicid);   
    //const origen = this.state.estacion_origen;
    const origen = event.target.value

    var request = `
    {
      estacionByName(token: "${userToken}", name: "${origen}"){
        serial
        marca
        estado
      }
    }`;

    graphql(request,
      data => {
        var msg;
        if (!data.estacionByName) {
          msg = "No hay bicicletas disponibles en esta estación"
        }

        var bicisDisponibles = []
        data.estacionByName.forEach(bici => {
          if (bici.estado === "Disponible") {
            bicisDisponibles.push(bici)
          }
        })

        if (bicisDisponibles.length < 1) {
          msg = "No hay bicicletas disponibles en esta estación"
        }

        this.setState({ origen: origen, origenError: msg, bicicletasOrigen: bicisDisponibles })
      }
    );

    this.componentDidMount();


    Alert.alert(
      'Disfruta tu viaje, tu bicicleta es:',
      'Serial No.: ' + 123,
      [
        {
          text: 'Aceptar',
        }
      ]
    )  
  }  
  componentDidMount() {
    
    const origen = this.state.estacion_origen;
    const final = this.state.estacion_destino;
    const disponibles = this.state.bicicletasOrigen
    if (origen === final) {
      this.setState({ finalError: "Cambia las estaciones!" })
      
      return
    }
    if (!disponibles || disponibles.length < 1) {
      this.setState({ finalError: "No hay bicicletas disponibles en esta estación" })
      
      return
    }
    var request = `query {
      userById(token: "${userToken}") {
        name
        lastname
        email
        id
      }
    }`;

    graphql(
      request,
      (data) => {
        this.setState({
          isLoading: false,
          dataSource: data.userById,
        })
      },
      (status, data) => {
      }
    );
    var requestBici = `query{
      estacionByName(token: "${userToken}", name: "${origen}"){
        
        
        serial
        marca
        estado
      }
    }`;

    graphql(request,
      data => {
        var msg;
        if (!data.estacionByName) {
          msg = "No hay bicicletas disponibles en esta estación"
        }

        var bicisDisponibles = []
        data.estacionByName.forEach(bici => {
          if (bici.estado === "Disponible") {
            bicisDisponibles.push(bici)
          }
        })

        if (bicisDisponibles.length < 1) {
          msg = "No hay bicicletas disponibles en esta estación"
        }

        this.setState({ origenError: msg, bicicletasOrigen: bicisDisponibles })
      }
    );
    console.log(this.state)

    var bicid = 123

    let requestPrestamo = `
    mutation{
      createPrestamo(token: "${userToken}", prestamo:{
        bici_id: ${disponibles[0].serial}
      }){
        id
        solicitud
      }
    }`;

    graphql(requestPrestamo,
      data => {
        console.log("prestamo No.")
        console.log(data.createPrestamo.id)
      }
    );
  }

  render() {
    //console.log(this.state)

    return (
      
    <View style={styles.container}>
      <Request_icon/>
      <Text style={styles.text}>Seleccione su Estación de Inicio</Text>
      <Picker 
        selectedValue={this.state.estacion_origen}
        style={styles.picker}
        underlineColorAndroid='rgba(0,0,0,0)'
        onValueChange={(itemValue, itemIndex) => this.setState({estacion_origen: itemValue})} >
        
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
        onValueChange={(itemValue, itemIndex) => this.setState({estacion_destino: itemValue})}>
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
        
        containerStyle={{ padding: 8, height: 45, width: 150, overflow: 'hidden', borderRadius: 10, 
          borderWidth: 1, borderColor: '#fff', backgroundColor: '#06A800' }}
        disabledContainerStyle={{ backgroundColor: '#db143f' }}
        onPress={() => this._handlePressR()}
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
    paddingHorizontal: 10
  }
});