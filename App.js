import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/Home";

export default class App extends React.Component {
  render() {
    return <HomeScreen />;
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  }
});
