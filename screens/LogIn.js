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

export default class LogIn extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 1,
          padding: 1
        }}>
        <Button
          title="LogIN"
          onPress={() => this.props.navigation.navigate("LogIn")}
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
