import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert
} from "react-native";
import Map from "./components/Map";
import { MapView } from "expo";

export default class App extends React.Component {
  render() {
    let pic = {
      uri: "https://robohash.org/James"
    };
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <Map />
          <Button
            onPress={() => {
              Alert.alert("You tapped the button!");
            }}
            title="Press Me"
          />
        </SafeAreaView>
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
