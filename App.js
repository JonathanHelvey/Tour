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
import { MapView, Location, Permissions } from "expo";
import Map from "./components/Map";

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {
  state = {
    region: null
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
    const { region } = this.state;
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <Map region={region} />
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
