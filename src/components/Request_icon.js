import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Request_icon extends React.Component {

	render(){
		return(
			<View style={styles.container}>
				<Image source={require('../images/Request_icon.png')}></Image>
				<Text style={styles.Request_iconText}>Inicia tu viaje</Text>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  Request_iconText: {
  	marginVertical: 8,
    color: "#ede7f6",
    fontSize: 18,
    textAlign: 'center',
  },
});
