import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./screens/Home";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}>
        <Header
          leftComponent={<Text>GO Back</Text>}
          centerComponent={{ text: "TOUR CHICAGO", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
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
