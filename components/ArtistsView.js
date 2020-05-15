import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ArtistsView({isArtistsView, artists}) {

if(!isArtistsView) return null
  
  return (
    <View style={styles.container}>
      {artists.map((artist, index) => <Text style={styles.text} key={index}>{artist.name}</Text>)}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    margin: 5
  }
});
