import useUserStore from '@/hooks/use-userstore'
import { Stack } from 'expo-router'
import React from 'react'

const RootNav = () => {
  const { isGuest, user } = useUserStore()
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isGuest || user}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={!isGuest && !user}>
        <Stack.Screen name="(public)" />
      </Stack.Protected>
    </Stack>
  )
}

export default RootNav