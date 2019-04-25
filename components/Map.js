import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
//import Map from "./components/Map";
import { MapView } from "expo";

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
      error: null
    };
  }
  fetchMarkerData() {
    fetch(
      "https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/United-States?city=chicago&state=illinois&limit=5"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          markers: responseJson.Attractions
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetchMarkerData();
  }
  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: 41.8781,
          longitude: -87.6298,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        {this.state.isLoading
          ? null
          : this.state.markers.map((marker, index) => {
              const coords = {
                latitude: marker.coordinates[0],
                longitude: marker.coordinates[1]
              };

              const metadata = `Status: ${marker.description}`;

              return (
                <MapView.Marker
                  key={index}
                  coordinate={coords}
                  title={marker.name}
                  description={metadata}
                />
              );
            })}
      </MapView>
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
