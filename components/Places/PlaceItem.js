import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable style={styles.placeItem} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.addressContainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {},
  image: {},
  addressContainer: {},
  title: {},
  address: {},
});
