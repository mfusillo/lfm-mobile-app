import React from 'react'
import { Text } from 'react-native'

export default function HomeView({isHomeView}) {

  if(!isHomeView) return null
  return (
    <>
      <Text>
        Hi Matteo!
      </Text>
      <Text>
        Your top tracks of last week:
      </Text>
    </>
  )
}
