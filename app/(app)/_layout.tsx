import { Stack } from 'expo-router'
import React from 'react'

const RootNav = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)"  />
        <Stack.Screen name="(public)" />
    </Stack>
  )
}

export default RootNav