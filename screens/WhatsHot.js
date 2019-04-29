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
      <View
        style={{
          flex: 1,
          margin: 1,
          padding: 1
        }}>
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
    height: "100%",
    width: "100%"
  }
});
