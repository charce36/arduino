import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button, Alert, Switch, Image } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtRMc6MpxqLEY80vZZV7N5oSqA1wKg5M8",
  databaseURL: "tfi-domoticarg.firebaseio.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class DomoticApp extends Component {
  constructor(props) {
    super(props);
  }

  gotUserData(snapshot){
    snapshot.forEach(userSnapshot => {
      var k = userSnapshot.key;
      var id = userSnapshot.val().AssignedID;
      var name = userSnapshot.val().Name;
      ref.child("teams").child(id).once("value", teamsSnapshot => {
        teamsSnapshot.forEach(teamSnapshot => {
          var teamKey = teamSnapshot.key;
          teamSnapshot.forEach(teamProp => {
            var prop = teamProp.key;
            var val = teamProp.val();
            console.log(k+" "+name+" "+id+": "+teamKey+", "+prop+"="+val);
          });
        });
      });
    })}

  requestLed(pin, value) {
    var rootRef = firebase.database().ref();

    var urlRef = rootRef.child("disp1");
    urlRef.once("value", function(snapshot) {
      snapshot.forEach(function(child) {

        if(child.key == "luzPin"){
          console.log(child.key+": "+child.val());
          firebase.database().ref(userMobilePath).set({
            luzPin: value
          });       
        }
      });
    });

    


    if (pin == 'luzPin') {
      return firebase.database().ref(userMobilePath).set({
        luzPin: value
      })
    }
    else if(pin == 'luzPin2'){
      return firebase.database().ref(userMobilePath).set({
        luzPin2: value
      })
    }
  };

  render() {
    return (
      <View style={styles.mainCotainer}>

        <View style={styles.cover}>
          <Text style={styles.homeText}>DomoticARG</Text>
          <Text style={styles.homeSubTitle}>v0.1</Text>
        </View>

        <View style={styles.luz}>
          <Text style={styles.lightText}>Luz 01</Text>
          <Button
            color="#27ae60"
            onPress={() => {
              this.requestLed("luzPin", 1);
            }}
            title="Encender"
          />

          <Button
            color="#c0392b"
            onPress={() => {
              this.setState({ statusMessage: 'apagado' });
              this.requestLed("luzPin", 0);
            }}
            title="Apagar"
          />
        </View>

        <View style={styles.luz}>
          <Text style={styles.lightText}>
            Luz 02
          </Text>
          <Button
            color="#27ae60"
            onPress={() => {
              this.requestLed("luzPin2", 1);
            }}
            title="Encender"
          />
          <Button
            color="#c0392b"
            onPress={() => {
              this.requestLed("luzPin2", 0);
            }}
            title="Apagar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCotainer: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: "#34495e"
  },
  homeSubTitle: {
    fontSize: 15,
    color: 'white'
  },
  ip: {
    marginBottom: 50
  },
  cover: {
    marginBottom: 50
  },
  button: {
    flex: 1
  },
  homeText: {
    fontSize: 25,
    color: 'white'
  },
  luz: {
    width: 300
  },
  lightText: {
    fontSize: 20,
    color: 'white'
  }
});