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

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <Map />
          <Button
            onPress={() => {
              Alert.alert(
                "Welcome to TOUR CHICAGO! Pick an Attraction and EXPLORE!!!"
              );
            }}
            title="Get Started"
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
