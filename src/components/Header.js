// Importaciones
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

var correo = "jrhiguitaz@unal.edu.co";
var lastName = "Higuita Zapata";
var name = "Jose Rene";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>

        <Text style={styles.text}> Perfil de Usuario</Text>

        <View style={styles.profilePhotoS}>
          <Image style={styles.profilePhoto} source={require('../images/Rene_Higuita.jpg')}></Image>
        </View>

        <Text style={styles.lastname}>{lastName}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{correo}</Text>

      </View> 
    );
  }
}

const styles = StyleSheet.create({

  headerBackground: {
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#3949ab',
  },

  profilePhotoS: {
    width: 250,
    height: 250,
    borderRadius: 180,
    borderColor: '#fff',
    borderWidth: 4,
  },

  profilePhoto: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 180,
    borderColor: 'black',
    borderWidth: 4,
  },

  text: {
    color: "#ede7f6",
    fontSize: 25,
    marginVertical: 20,
  },

  lastname: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',   
  },

  name: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '300', 
  },

  email: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: '300',
    fontStyle: 'italic',
    
  }
});
