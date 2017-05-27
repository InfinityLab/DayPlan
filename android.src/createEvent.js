import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';

export default class CreateEvent extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
  static date = null;
  static time = null;
  constructor(props) {
    super(props);
    this.state = {};
  }
  async selectDate() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Default to be today
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        this.setState({
          year,
          month,
          day,
        })
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  async selectTime() {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.setState({
          hour,
          minute,
        })
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }
  render() {
    return (
      <View>
        <Text style="padding-top:10px">Event</Text>
        <TextInput
          onChangeText={(text) => this.setState({text})}
        />
        <Text>{this.state.year}{this.state.month}{this.state.date}{this.state.hour}{this.state.minute}</Text>
        {this.state.year}
        <Button onPress={this.selectDate.bind(this)}
          title="Pick Date"/>
        <Button onPress={this.selectTime.bind(this)}
          title="Time"/>
      </View>
    );
  }
}