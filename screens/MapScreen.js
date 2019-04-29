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
        <Map />
      </View>
    );
  }
}
