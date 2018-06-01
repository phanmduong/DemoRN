/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class Child extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      b: this.props.value + 1
    };
    console.log("constructor child");
  }

  componentWillMount() {
    console.log("componentWillMount child");
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps child");
    this.setState({
      b: nextProps.value + 1
    });
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate child");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate child");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }

  render() {
    console.log("render child");
    return (
      <View style={styles.container}>
        <Text>{this.state.b}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
