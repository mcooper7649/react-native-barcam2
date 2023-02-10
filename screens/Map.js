import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../components/UI/IconButton';
import { Alert } from 'react-native';

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSelectedLocation({
      lat: latitude,
      lng: longitude,
    });
  }

  const savedPickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location selected!',
        'Please pick a location on the map before saving.'
      );
      return;
    }

    navigation.navigate('AddPlace', {
      pickedLocation: selectedLocation,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savedPickedLocationHandler}
        />
      ),
    });
  }, [navigation, savedPickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
