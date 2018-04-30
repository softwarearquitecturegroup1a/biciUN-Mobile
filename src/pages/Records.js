// Importaciones
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Records extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Historial de Prestamos</Text>
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