import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

export default function NavBar({setArtistsView, setHomeView, setTagsView}) {
  return (
    <View style={styles.container}>

      <TouchableOpacity 
        onPress = {() => {
          setArtistsView(false)
          setHomeView(true)
          setTagsView(false)
          }}
        style={styles.navbutton}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {
          setArtistsView(true)
          setHomeView(false)
          setTagsView(false)
        }}
        style={styles.navbutton}>
        <Text>Artists</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {
          setArtistsView(false)
          setHomeView(false)
          setTagsView(true)
        }}
        style={styles.navbutton}>
        <Text>Tags</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 40,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  navbutton: {

  }
})