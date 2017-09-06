import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { ip: '', statusMessage: '' };
  }

  render() {
    function requestLed(num) {
var URIReq = "";

if(num == 0)
  URIReq = "http://192.168.0.26/LED=OFF";
else
  URIReq = "http://192.168.0.26/LED=ON";

var xhr = new XMLHttpRequest();
xhr.open("GET", URIReq + num, true);
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.timeout = 5000; // time in milliseconds
xhr.onload = function () {
  // Request finished. Do processing here.
  alert("ok");
};

xhr.ontimeout = function (e) {
  // XMLHttpRequest timed out. Do something here.
  alert("fail");
  xhr.abort(); ss
  requestLed(num);
};

// xhr.onreadystatechange = function () {
//   if (xhr.readyState) {
//     alert(xhr.status);
//   }
//   else
//     console.log("OK!!");
// }
xhr.send();


    };
    return (
      <View style={{ marginTop: 100, flex: 1, flexDirection: 'column' }}>
        <TextInput
          style={{ height: 40 }}
          name="ip"
          placeholder="Type the IP Address (default is 192.168.0.26)"
          onChangeText={(text) => this.setState({ ip: text })}
        />
        <Button
          onPress={() => {
            this.setState({ statusMessage: 'activado' });
            requestLed(1);
          }}
          title="Encender"
        />
        <Button
          style={styles.button}
          onPress={() => {
            this.setState({ statusMessage: 'apagado' });
            requestLed(0);
          }}
          title="Apagar"
        />
        <Text style={styles.buttonOff}>{this.state.statusMessage}</Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  buttonOff: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12
  }
});