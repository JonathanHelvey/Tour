import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Map from "../components/Map";
import Home from "./Home";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: "The Map"
  };
  render() {
    return (
      <View
        style={{
          flex: 1
        }}>
        <View style={styles.SearchBar}>
          <TextInput
            placeholder=" Search here"
            underlineColorAndroid="transparent"
            selectionColor={"black"}
            fontSize={window.width * 0.05}
          />
        </View>
        <Map />
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
