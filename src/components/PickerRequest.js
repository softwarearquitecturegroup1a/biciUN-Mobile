import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import {Header} from './Header.js';


export default class PickerRequest extends Component {

  constructor(props) {
    super(props);
      this.state = {
        language: "python",
      }
  }
   render() {
     
      return (
        
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      )
   }
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})