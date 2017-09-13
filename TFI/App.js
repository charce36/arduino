import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button, Alert, Image } from 'react-native';
import * as firebase from 'firebase';
import { Switch } from 'react-native-switch';	
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';



const firebaseConfig = {
  apiKey: "AIzaSyDtRMc6MpxqLEY80vZZV7N5oSqA1wKg5M8",
  databaseURL: "tfi-domoticarg.firebaseio.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);



export default class DomoticApp extends Component {
	
	constructor(props) {
		super(props);
		
		this.toggle = this.toggle.bind(this);
		this.state = { 
			selectedItem: 'About',
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	
	updateMenuState(isOpen) {
		this.setState({ isOpen });
	}
	
	onMenuItemSelected = item =>
		this.setState({
		isOpen: false,
		selectedItem: item,
	});
	
	requestLed(dispo, pin, value) {
		
		var rootRef = firebase.database().ref();
		var urlRef = rootRef.child(dispo);
	
		if (pin=="luzPin") {
			urlRef.update({
				'luzPin':value
			});
		}
		else if (pin == "luzPin2") {
			urlRef.update({
				'luzPin2':value
			});
		}
	};

	render() {
		const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
		
		return (
			<SideMenu
				menu={menu}
				isOpen={this.state.isOpen}
				onChange={isOpen => this.updateMenuState(isOpen)}
			>

			<View style={styles.mainCotainer}>
				<View style={styles.cover}>
					<Text style={styles.homeText}>DomoticARG</Text>
					<Text style={styles.homeSubTitle}>v0.4</Text>
				</View>

				<View style={styles.luz}>
					<Text style={styles.lightText}>Luz 01</Text>
					<Button
						color="#27ae60"
						onPress={() => {
							this.requestLed("disp1","luzPin", 1);
						}}
						title="Encender"
					/>

					<Button
						color="#c0392b"
						onPress={() => {
							this.requestLed("disp1","luzPin", 0);
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
							this.requestLed("disp1","luzPin2", 1);
						}}
						title="Encender"
					/>
					<Button 
						color="#c0392b" 
						onPress={() => { 
							this.requestLed("disp1","luzPin2", 0);
						}}
						title="Apagar"
					/>          
				</View>
		
				<View style={{height: 30}}>
				</View>
		
				<View style={styles.luz, {width: 80, height: 75, margin: 3}}>
					<Text style={styles.lightText}>
						Luz 03
					</Text>
					<Switch
						value={false}
						onValueChange={(val) => this.requestLed("disp2","luzPin", val?1:0)}
						style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
						disabled={false}
						activeText={'On'}
						inActiveText={'Off'}
						backgroundActive={'green'}
						backgroundInactive={'red'}
						circleActiveColor={'#30a566'}
						circleInActiveColor={'#000000'}
					/>
				</View>
		
				<View style={styles.luz, {width: 80, height: 75, margin: 3}}>
					<Text style={styles.lightText}>
						Luz 04        
					</Text>
					<Switch
						value={false}
						style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
						onValueChange={(val) => this.requestLed("disp2","luzPin2", val?1:0)}
						disabled={false}
						activeText={'On'}
						inActiveText={'Off'}
						backgroundActive={'green'}
						backgroundInactive={'red'}
						circleActiveColor={'#30a566'}
						circleInActiveColor={'#000000'}
					/>
				</View>
			
			</View>
			</SideMenu>
    );
  }
}


class Application extends React.Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
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
  },
});