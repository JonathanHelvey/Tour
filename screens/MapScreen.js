import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
export default class Friends extends React.Component {
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
