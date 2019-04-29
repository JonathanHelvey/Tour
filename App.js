import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/Home";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}>
        <HomeScreen />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  }
});
