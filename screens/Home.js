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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#03A9F4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/ChicagoSunset.jpg")}
          style={{ margin: 5, width: 300, height: 200 }}
        />
        <Text>Welcome To TOUR OBSCURA Chicago!</Text>
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
      </View>
    );
  }
}

class MapScreen extends React.Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return <Map />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(TabNavigator);
