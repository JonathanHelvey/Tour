import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Plateform,
  YellowBox
} from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import WhatsHot from "./WhatsHot";
import MapScreen from "./MapScreen";
import SignInScreen from "./SignInScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
    alignItems: "center",
    justifyContent: "center"
  },
  bigBlue: {
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Roboto"
  },
  button: {
    margin: 5,
    padding: 5
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "WELCOME"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/images/ChicagoSunset.jpg")}
            style={{ margin: 5, width: 400, height: 300 }}
          />
          <Text style={styles.bigBlue}>Welcome To TOUR OBSCURA Chicago!</Text>
          <Button
            title="Map of Chicago"
            onPress={() => {
              this.props.navigation.navigate("Map", {
                itemId: 86,
                otherParam: "anything you want here"
              });
            }}
          />
          <Image
            source={require("../assets/images/bean.jpg")}
            style={{ margin: 5, width: 400, height: 300 }}
          />
        </View>
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Map: { screen: MapScreen },
    WhatsHot: { screen: WhatsHot },
    SignInScreen: { screen: SignInScreen }
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerBackTitle: "TOUR CHICAGO",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerRight: (
        <Button
          style={styles.button}
          onPress={() => alert("Sign In!")}
          title="Sign IN"
          color="dodgerblue"
        />
      )
    }
  }
);

const MapStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  WhatsHot: { screen: WhatsHot }
});

const WhatsHotStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  WhatsHot: { screen: WhatsHot }
});

export default createAppContainer(
  createBottomTabNavigator({
    Home: { screen: HomeStack },
    Map: { screen: MapStack },
    WhatsHot: { screen: WhatsHotStack }
  })
);
