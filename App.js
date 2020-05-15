import React, { useState, useEffect } from 'react'
import ArtistsView from './components/ArtistsView'
import HomeView from './components/HomeView'
import TagsView from './components/TagsView'
import NavBar from './components/NavBar'
import { StyleSheet, View } from 'react-native'

export default function App() {

  const [isArtistsView, setArtistsView] = useState(false)
  const [isHomeView, setHomeView] = useState(true)
  const [isTagsView, setTagsView] = useState(false)
  const [artists, setArtists] = useState([])

  useEffect(() => {
    
    fetch('https://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=5dd647bc2c6d535dc541fbb5e1b0e564&user=3run3r&limit=10&format=json')
    .then(res => res.json())
    .then(data => setArtists(data.artists.artist))
    
  }, [])


  return (
    <View style={styles.appContainer}>
      <HomeView isHomeView={isHomeView}/>
      <ArtistsView isArtistsView={isArtistsView} artists={artists}/>
      <TagsView isTagsView={isTagsView}/>
      <NavBar setHomeView={setHomeView} setArtistsView={setArtistsView} setTagsView={setTagsView}/>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
