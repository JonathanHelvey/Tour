import React, { Component } from "react";
import { AppRegistry, Text, TextInput, View, SafeAreaView } from "react-native";
import { MapView, Location, Permissions } from "expo";

export default class App extends React.Component {
  state = {
    region: null,
    coffeeShops: []
  };
  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };
    await this.setState({ region });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Map region={region} places={this.state.coffeeShops} />
      </SafeAreaView>
    );
  }
}
