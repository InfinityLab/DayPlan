/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  DatePickerAndroid
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import CreateEvent from './android.src/createEvent.js';

export default class Main extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    // AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',
          height: 35, backgroundColor: 'powderblue'}}>
          <Button title="Menu" style={{width: 80}} color="skyblue" />
          <Button title="Create" style={{width: 80}} color="skyblue"
          onPress={() => navigate('Profile', { name: 'Jane' })}/>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const DayPlan = StackNavigator({
  Main: {screen: Main},
  Profile: {screen: CreateEvent},
});

const styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('DayPlan', () => DayPlan);
