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

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bigBlue: {
    alignItems: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    margin: 5,
    padding: 5
  }
});
