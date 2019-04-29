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

export default class WhatsHot extends React.Component {
  static navigationOptions = {
    title: "Whats Hot!!!"
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/chicagoTrain.jpg")}
          style={{ margin: 5, width: 400, height: 300 }}
        />
        <Button
          style={styles.container}
          title="Take Me Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "darkseagreen",
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
