/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var AwesomeProject = React.createClass({
	onNameChanged: function(event){
		this.setState({name: event.nativeEvent.text});
	},
  render: function() {
    return (
      <View style={styles.container}>
		<TextInput style={styles.nameInput}
			onChange={this.onNameChanged}
			placeholder='hello, world!'>
		</TextInput>
        <Text style={styles.text}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	},
	nameInput: {
		height: 36,
		padding: 4,
		margin: 24,
		fontSize: 18,
		borderWidth: 1,
	}
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
