import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button, Alert, Switch,Image } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ip: '192.168.0.24', 
      statusMessage: '' 
    };
  }

  requestLed(num, prender) {
    var URIReq = "";

    if (prender)
      URIReq = "http://" + this.state.ip + "/light" + num + "on";
    else
      URIReq = "http://" + this.state.ip + "/light" + num + "off";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", URIReq, true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.timeout = 5000; // time in milliseconds
    xhr.onload = function () {
      // Request finished. Do processing here.
      console.log("Call " + URIReq + " OK");
    };

    xhr.ontimeout = function (e) {
      console.log("Call " + URIReq + " time out..");
      xhr.abort();
    };
    xhr.send();
  };

  render() {
    return (
      <View style={styles.mainCotainer}>

        <View style={styles.cover}>
          <Text style={styles.homeText}>DIEGO PUTO</Text>
          <Text style={styles.homeSubTitle}>v0.1</Text>
        </View>

        <View style={styles.luz}>
          <Text style={styles.lightText}>Luz 01</Text>
          <Button
            color="#27ae60"
            onPress={() => {
              this.setState({ statusMessage: 'activado' });
              this.requestLed(1, true);
            }}
            title="Encender"
          />

          <Button
            color="#c0392b"
            onPress={() => {
              this.setState({ statusMessage: 'apagado' });
              this.requestLed(1, false);
            }}
            title="Apagar"
          />
          <Text style={styles.buttonOff}>{this.state.statusMessage}</Text>
        </View>
        
        <View style={styles.luz}>
          <Text style={styles.lightText}>
            Luz 02
          </Text>
          <Button
            color="#27ae60"
            onPress={() => {
              this.setState({ statusMessage2: 'activado' });
              this.requestLed(2, true);
            }}
            title="Encender"
          />
          <Button 
          color="#c0392b" 
            onPress={() => { 
              this.setState({ statusMessage2: 'apagado' });
              this.requestLed(2, false);
            }}
            title="Apagar"
          />
          <Text>{this.state.statusMessage2}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mainCotainer:{ 
    paddingTop: 100, 
    flex: 1,
    alignItems:'center', 
    flexDirection: 'column', 
    backgroundColor:"#34495e"
  },
  homeSubTitle:{
    fontSize: 15,
    color: 'white'
  },
  ip:{
    marginBottom: 50
  },
  cover:{
    marginBottom: 50
  },
  button: {
    flex: 1
  },
  homeText:{
    fontSize: 25,
    color: 'white'
  },
  luz: {
    width:300
  },
  lightText: {
    fontSize: 20,
    color: 'white'
  }
});