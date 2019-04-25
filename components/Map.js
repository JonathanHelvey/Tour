import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
//import Map from "./components/Map";
import { MapView } from "expo";

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: []
    };
  }
  fetchMarkerData() {
    fetch("https://feeds.citibikenyc.com/stations/stations.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          markers: responseJson.stationBeanList
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
                latitude: marker.latitude,
                longitude: marker.longitude
              };

              const metadata = `Status: ${marker.statusValue}`;

              return (
                <MapView.Marker
                  key={index}
                  coordinate={coords}
                  title={marker.stationName}
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
