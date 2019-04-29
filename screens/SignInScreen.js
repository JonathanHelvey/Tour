import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Plateform,
  YellowBox
} from "react-native";
import Home from "./Home";

export default class SignInScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
