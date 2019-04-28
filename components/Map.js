import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
//import Map from "./components/Map";
import { MapView, Location, Permissions } from "expo";

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
      markers2: [],
      region: null,
      error: null
    };
  }
  componentDidMount() {
    this.fetchMarkerData();
    this.getLocation();
    setTimeout(() => this.setState({ flex: 1 }), 100);
  }
  fetchMarkerData() {
    fetch(
      "https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/United-States?city=chicago&state=illinois&limit=auto"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          markers: data.Attractions,
          region: data.region
        });
      })
      .catch(error => {
        console.log(error);
      });
    fetch(
      "https://atlas-obscura-api.herokuapp.com/api/gastro/places?limit=auto"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          markers2: data[`Gastro-Places`],
          region: data.region
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getLocation = async () => {
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
    const { region, markers } = this.state;
    return (
      <MapView
        style={{
          flex: this.state.flex,
          margin: 1,
          padding: 1
        }}
        showsMyLocationButton
        showsUserLocation
        region={region}
        marker={markers}
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

              const description = `Description: ${marker.description}`;
              const image = marker.img;
              return (
                <MapView.Marker
                  key={index}
                  coordinate={coords}
                  image={marker.img}
                  title={marker.name}
                  description={description}
                  urlPath={marker.path}
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
