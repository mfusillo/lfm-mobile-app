import React from 'react'
import { Text, SafeAreaView } from 'react-native'

export default function TagsView({isTagsView}) {
  
  if(!isTagsView) return null
  return (
    <SafeAreaView>
      <Text>
        I AM THE TAGS VIEW
      </Text>
    </SafeAreaView>
  )
}