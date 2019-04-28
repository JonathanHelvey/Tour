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
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import LogIn from "./LogIn";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/ChicagoSunset.jpg")}
            style={{ margin: 5, width: 300, height: 200 }}
          />
          <Text style={styles.bigBlue}>Welcome To TOUR OBSCURA Chicago!</Text>
          <Button
            title="Map of Chicago"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate("Map", {
                itemId: 86,
                otherParam: "anything you want here"
              });
            }}
          />
          <Image
            source={require("../assets/images/bean.jpg")}
            style={{ margin: 5, width: 300, height: 200 }}
          />
        </View>
      </View>
    );
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 1,
          padding: 1
        }}>
        <Map />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  },
  LogIn: {
    screen: LogIn
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bigBlue: {
    alignItems: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default createAppContainer(TabNavigator);
